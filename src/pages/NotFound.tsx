import { Link } from "react-router-dom"
import Typography from "../components/Typography"

/**
 * Fallback page for when the user goes to an unknown url. Directs the user back to the home page
 */
export default function NotFound() {
  return (
    <div className="m-auto">
      <Typography>
        <span>
          {"The page you are looking for cannot be found. Click "}
          <Link to="/">here</Link>
          {" to go home."}
        </span>
      </Typography>
    </div>
  )
}
