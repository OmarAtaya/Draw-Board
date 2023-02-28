import { useRef, useEffect } from "react";

export function useOnDraw(OnDraw) {

    const canvasRef = useRef(null)

    const isDrawingRef = useRef(false)

    const mouseMoveListenerRef = useRef(null)

    const prevPointRef = useRef(null)

    useEffect(() => {

        function initMouseMoveListener() {
            const mouseMoveListener = (e) => {
                e.preventDefault()
                if(isDrawingRef.current){
                    const point = computePointInCavas(e.pageX, e.pageY)
                    const ctx = canvasRef.current.getContext('2d')
                    if(OnDraw)
                    {
                        OnDraw(ctx, point, prevPointRef.current)
                    }
                    prevPointRef.current = point;
                }
            }
            const touchMoveListener = (e) => {
                e.preventDefault()
                if(isDrawingRef.current){
                    const point = computePointInCavas(e.pageX, e.pageY)
                    const ctx = canvasRef.current.getContext('2d')
                    if(OnDraw)
                    {
                        OnDraw(ctx, point, prevPointRef.current)
                    }
                    prevPointRef.current = point;
                }
            }
            mouseMoveListenerRef.current = mouseMoveListener
            canvasRef.current.addEventListener("touchmove", touchMoveListener)
            window.addEventListener('mousemove', mouseMoveListener)
    
        }

        function computePointInCavas(clientX, clientY) {
            if(canvasRef.current)
            {
                const boundingRect = canvasRef.current.getBoundingClientRect()
                return{
                    x: clientX - boundingRect.left,
                    y: clientY - boundingRect.top
                }
            }
            else{
                return null;
            }
        }

        function removeListeners() {
            if(mouseMoveListenerRef.current){
                window.removeEventListener('mousemove', mouseMoveListenerRef.current)
            }
        }

        initMouseMoveListener()

        return () => {
            removeListeners();
        }
    }, [OnDraw])
    

    function setCanvasRef(ref) {
        if(!ref)
        {
            return;
        }
        canvasRef.current = ref;
    }

    function onMouseDown(e) {
        isDrawingRef.current = true;
        e.preventDefault()
    }

    function onMouseUp(e){
        isDrawingRef.current = false;
        prevPointRef.current = null;
        e.preventDefault()
    }

    return {
        setCanvasRef,
        onMouseDown,
        onMouseUp
    }
}