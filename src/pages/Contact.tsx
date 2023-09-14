import {
  Button,
  Label,
  Spinner,
  Textarea,
  TextInput,
  Toast,
} from 'flowbite-react'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Typography from '../components/Typography'

export default function ContactForm() {
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isLoading, setisLoading] = useState(false)
  const navigate = useNavigate()

  const onSucess = useCallback(() => {
    toast(<Toast>Message Sent!<Toast.Toggle /></Toast>)
    navigate('/')
  }, [navigate])

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)

      formData.append('access_key', 'd1a4d2bb-db51-41de-bb1c-a93e620246c2')

      const object = Object.fromEntries(formData)
      let cancelSubmit = false
      for (const field in object) {
        if (!object[field]) {
          errors[field] = 'Missing Field'
          cancelSubmit = true
        } else if (
          field === 'email' &&
          !object[field].toString().includes('@')
        ) {
          errors[field] = 'Improper Email Address'
          cancelSubmit = true
        } else {
          delete errors[field]
        }
        setErrors({ ...errors })
      }
      if (cancelSubmit) return

      setisLoading(true)
      const json = JSON.stringify(object)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json())

      setisLoading(false)
      if (res.success) {
        onSucess()
      }
    },
    [errors, onSucess]
  )

  return (
    <form className="space-y-4 max-w-2xl w-full m-auto" noValidate onSubmit={onSubmit}>
      <Typography>
        <h1>Contact</h1>
      </Typography>
      <div>
        <Label htmlFor="name" value="Name" />
        <TextInput
          color={errors.name && 'failure'}
          helperText={errors.name}
          name="name"
        />
      </div>
      <div>
        <Label htmlFor="email" value="Email" />
        <TextInput
          color={errors.email && 'failure'}
          helperText={errors.email}
          type="email"
          name="email"
          placeholder="name@example.com"
        />
      </div>
      <div>
        <Label htmlFor="message" value="Message" />
        <Textarea
          color={errors.message && 'failure'}
          helperText={errors.message}
          name="message"
        />
      </div>
      <Button className="w-full" disabled={isLoading} type="submit">
        {isLoading ? <Spinner /> : 'Submit'}
      </Button>
    </form>
  )
}
