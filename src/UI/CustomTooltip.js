import React from 'react';
import { Button, Popover, Position, Tooltip } from "@blueprintjs/core";
import styled from "styled-components";

/*
buttonContent string
tooltipPosition string
tooltipContent string
buttonStyle: string, [plain/text]
position: string [top/bottom/left/right]

* */

const Text = styled.span`
    border-bottom: 1px dotted;
    font-size: 14px;
`;


const CustomTooltip = (props) => {
    const {buttonStyle, tooltipContent, buttonContent, position} = props;

    let tooltipPosition;
    if(position === 'right'){
        tooltipPosition = Position.RIGHT;
    }
    else if(position === 'left'){
        tooltipPosition = Position.LEFT;
    }
    else if(position === 'top'){
        tooltipPosition = Position.TOP;
    }
    else if(position === 'bottom'){
        tooltipPosition = Position.BOTTOM;
    }
    else {
        tooltipPosition = Position.RIGHT;
    }

    return (
        <Popover content={null}  position={Position.RIGHT} autoFocus={false}>
            <Tooltip content={tooltipContent} position={tooltipPosition} transitionDuration={10000} >
                {buttonStyle === 'plain' ? <Button>{buttonContent}</Button>
                    : <Text>{buttonContent}</Text>
                }
            </Tooltip>
        </Popover>
    )
};

export default CustomTooltip