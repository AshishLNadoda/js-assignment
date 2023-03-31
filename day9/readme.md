Event Bubbling − Whenever an event happens on an element, the event handlers will first run on it and then on its parent and finally all the way up to its other ancestors.

Event Capturing − It is the reverse of the event bubbling and here the event starts from the parent element and then to its child element.
Event Propagation determines in which order the elements receive the event. There are two ways to handle this event propagation order of HTML DOM is Event Bubbling and Event Capturing.

For example, suppose there are three components namely component1, component2, component3. Inside these components, we attached the onClickEventListener event handlers. Now when we click on component3 the event handler for all the three components will be executed. Now here the question is in which order the event will execute. Now at this point event bubbling and capturing comes into the picture.