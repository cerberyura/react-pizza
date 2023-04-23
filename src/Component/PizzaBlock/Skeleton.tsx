import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="109" cy="100" r="100" />
    <rect x="0" y="229" rx="10" ry="10" width="213" height="23" />
    <rect x="13" y="271" rx="0" ry="0" width="200" height="0" />
    <rect x="0" y="267" rx="0" ry="0" width="213" height="78" />
    <rect x="0" y="364" rx="10" ry="10" width="69" height="30" />
    <rect x="105" y="364" rx="25" ry="25" width="111" height="45" />
  </ContentLoader>
)

export default Skeleton