import * as React from 'react';
import './index.css'
import Cube from 'react-3d-cube';
 
class LogoCube extends React.Component {
  render() {
    return (
    <center>
            <div>
                <div
                    style={{
                        width: 300,
                        height: 300
                    }}
                >
                <Cube size={300} index="front">
                    <div style={{backgroundColor: 'black'}}>
                        <img style={{width: '280px', height: '300px'}} src="https://cdn.sanity.io/images/0vv8moc6/dvm360/0efdfab43ab36c3432ced2ceb2d52daae6a93c96-500x500.jpg"></img>
                    </div>
                    <div style={{backgroundColor: 'black'}}>
                        <img style={{width: '280px', height: '300px'}} src="https://sitterforyourcritter.com/wp-content/uploads/2019/09/female-cat-1.jpg"></img>
                    </div>
                    <div style={{backgroundColor: 'black'}}>
                        <img style={{width: '280px', height: '300px'}} src="https://pawsitivepotential.com/wp-content/uploads/2016/05/Tongue-Kitten-500x500_t.jpg"></img>
                    </div>
                    <div style={{backgroundColor: 'black'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://9ed48207422fa7fc5013-a6297eb5ec0f30e883355c8680f3b2d6.ssl.cf2.rackcdn.com/Hunter_wubba-9294%20(1)-20180803203739-20180803203910-500x500.jpg"></img>
                    </div>
                    <div style={{backgroundColor: 'black'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://www.guildinsurance.com.au/images/librariesprovider3/breed-images/500x500/cat_russian-blue-tica.jpg?sfvrsn=d16600b_2"></img>
                    </div>
                    <div style={{backgroundColor: 'black'}}>
                    <img style={{width: '280px', height: '300px'}} src="https://www.catmospherecafe.com/assets/chiangmai-3ede22d062b60dde4a501695a2e0bfc7451f44d412ed68bd01cb6b44216270e4.jpg"></img>
                    </div>
                </Cube>
                </div>
            </div>
        </center>
    );
  }
}


export default LogoCube
