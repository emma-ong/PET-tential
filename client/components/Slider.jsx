import React, {useState, useRef, useEffect} from 'react';
const pets = ["Bob.jpg", "cardi.jpg", "snoop.jpg"];
const delay = 2500;



function Slideshow() {
  const [index, setIndex] = useState(0);
 
  //creates a timeoutRef obj with prop .current
  const timeoutRef = useRef(0);
  function resetTimeout() {
    //if a timeoutRef obj has been set
    // console.log(timeoutRef.current)
    if (timeoutRef.current) {
      //clears previous timer set
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    //as initial state is set to null
    //when this function called, timer reset on each re-render
    //if not here, intervals affected, slide glitches
    resetTimeout();
    
    //setTimeout will run function every 2000ms
    //setTimeout stored in variable timeoutRef.current 
    
    // console.log(timeoutRef.current)
    timeoutRef.current = setTimeout(
      () =>
        //every 2000ms
        //looks at previous idx
        setIndex((prevIndex) =>
         //if prev idx is the last element in pet images array
         //restart idx back to 0
         //else add one to existing idxconsole.log(timeoutRef.current)
          prevIndex === pets.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    
    
    //re-renders index each time there is a change
    //moves to the next img
  }, [index]);


  return (
    <div className="slideshow">
      {/* translate3d(tx, ty, tz) */}
      {/* Negative values mean to move to the left*/}
      <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {pets.map((pet, index) => (
          //there are 3 images, so transform js and css refer to these containers
          <img src={`/images/${pet}`} className="slide" key={index}></img>))
        }
      </div>

      <div className="slideshowDots">
        {/* Underscore used as actual variable not used in return body, idx focus instead */}
        {pets.map((_, idx) => (
          <div
            key={idx}
            //activates when the index matches the 
            className={`slideshowDot${index === idx ? " active" : ""}`}
            //onclick event, user can shift to idx of slide
            //hence the need for two different map methods used
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow