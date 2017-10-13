const spotifyApi = new SpotifyWebApi;

var MusicPlayer = (props) => {

  var handleSelect = (e) => {
    props.handleDeviceSelect(e.target.value);
  }

  return (
    <div>
      <iframe
      src={"https://open.spotify.com/embed?uri=" + props.albumId}
      width="400" height="100"
      frameBorder="0"
      allowTransparency="true">
      </iframe>
      <select onChange={handleSelect}>
      {props.devices.map((device) => {
        return <option value={device.id}>{device.name}</option>
      })}
      </select>
    </div>)

}

window.MusicPlayer = MusicPlayer;
