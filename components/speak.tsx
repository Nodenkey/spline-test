import React, {FC} from 'react';

const Speak: FC = () => {
    return (
        <div style={{height: '500px', marginTop: 100}} className='grid-2'>
            <div>
                <h2 style={{width: 700, margin:'20px auto'}}>Say cheese...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div>
                <img style={{height: '100%'}} src='/assets/camera.jpg' alt='iphone'/>
            </div>
        </div>
    );
};

export default Speak;