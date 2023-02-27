import React from 'react';
import './Canvas.css';
import {useOnDraw} from './Hooks';

function Canvas() {

    const {setCanvasRef, onMouseDown} = useOnDraw(OnDraw)

    function OnDraw(ctx, point, prevPoint){
        DrawLine(prevPoint, point, ctx, '#000000', 5)
    }

    function DrawLine(start, end, ctx, color, width) {
        start = start ?? end
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = color;
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(start.x, start.y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    return (
        <div className='canvas'>
            <canvas className="canvas__container" width={window.innerWidth - 100} height={window.innerHeight - 150} ref={setCanvasRef} onMouseDown={onMouseDown}/>
        </div>
    )
}

export default Canvas