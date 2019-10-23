class UIEvent
{
    /*
        React Event Refernce
        https://reactjs.org/docs/events.html#supported-events
        https://reactjs.org/docs/events.html
        
        UI Events
            onScroll

        Touch Events
            onTouchCancel onTouchEnd onTouchMove onTouchStart
                boolean altKey
                DOMTouchList changedTouches
                boolean ctrlKey
                boolean getModifierState(key)
                boolean metaKey
                boolean shiftKey
                DOMTouchList targetTouches
                DOMTouchList touches

        Form Events
            onChange onInput onInvalid onSubmit

        Mouse Events
            onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
            onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
            onMouseMove onMouseOut onMouseOver onMouseUp
                boolean altKey
                number button
                number buttons
                number clientX
                number clientY
                boolean ctrlKey
                boolean getModifierState(key)
                boolean metaKey
                number pageX
                number pageY
                DOMEventTarget relatedTarget
                number screenX
                number screenY
                boolean shiftKey
        
        Pointer Events
            onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
            onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut

        Media Events
            onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
            onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
            onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
            onTimeUpdate onVolumeChange onWaiting

        Animation Events
            onAnimationStart onAnimationEnd onAnimationIteration
                string animationName
                string pseudoElement
                float elapsedTime 

        Transition Events
            onTransitionEnd
                string propertyName
                string pseudoElement
                float elapsedTime    

        Other Events
            onToggle
    */

    constructor()
    {

    }
}

export default UIEvent