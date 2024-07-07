// Write your code here

import './index.css'

const AppItem = props => {
  const {appItemDetails} = props
  const {appId, appName, imageUrl, category} = appItemDetails

  return (
    <li>
      <div className="app-card">
        <img className="image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </div>
    </li>
  )
}
export default AppItem
