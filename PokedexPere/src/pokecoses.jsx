import './devices.css-master/assets/devices.min.css'
import MainLayout from './MainLayout'
import Home from './Home'
import GaleriaGif from './GaleriaGif'

export default function Pokecoses() {
  return (
    <div className="marvel-device note8">
      <div className="inner"></div>
      <div className="overflow">
      </div>
      <div className="speaker"></div>
      <div className="sensors"></div>
      <div className="more-sensors"></div>
      <div className="sleep"></div>
      <div className="volume"></div>
      <div className="camera"></div>
      <div className="screen">
        <>
        <MainLayout/>
        <Home/>
        <GaleriaGif/>
        </>
      </div>
    </div>
  )
}