import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()

  console.log(`${error}asda`)

  return (
    <div id="error-page">
      <h2>Ууупс!</h2>
      <p>Эта страница пока в разработке</p>
    </div>
  )
}

export default ErrorPage
