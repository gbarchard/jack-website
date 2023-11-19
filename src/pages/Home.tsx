import { Link } from 'react-router-dom'
import Typography from '../components/Typography'

export default function Home() {
  return (
    <div className="m-auto">
      <Typography>
        <p>
          Hello, I'm Jack Teske. I am an Illustrator from Atlanta, Georgia. I
          studied at Ringling College of Art and Design. I have a knack for
          anything medieval. I have worked as a furniture designer at J Tribble
          antiques. On the side, I am creating a comic called{' '}
          <Link to="comics/templar">Templar</Link> which is based off my{' '}
          <Link
            to="https://online.fliphtml5.com/lthke/hhgs/#p=1"
            target="_blank"
          >
            Senior Thesis
          </Link>
          .
        </p>
      </Typography>
    </div>
  )
}
