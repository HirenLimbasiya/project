import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
    <Popover id="popover-basic" className='pop'>
        <Popover.Header as="h3">Popover right</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const Pop = ({ id, ele, handleTextClick, border }) => {


    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <p id={id} onClick={(e) => handleTextClick(e.target.id)}
                style={{ border: id === border ? "1px solid black" : null }}
            >Click me to see</p>
        </OverlayTrigger>
    );
}

export default Pop