import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li>
      <div className="list-container">
        <img src={imageUrl} alt={appName} className="image-size" />
        <p className="heading">{appName}</p>
      </div>
    </li>
  )
}

export default AppItem
