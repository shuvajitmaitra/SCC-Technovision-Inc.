import { checkPropTypes } from "prop-types";
import { useDrag } from "react-dnd";


// eslint-disable-next-line react/prop-types
const Todo = ({ item, playerType, onDropPlayer, index}) => {


    const [{ isDragging }, dragRef] = useDrag({
        type: playerType,
        item: () => ({ ...item, index }),
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult();
    
          if (item && dropResult) {
            onDropPlayer(item);
          }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });
    return(
        <div ref={dragRef}>
            <h3>{item.name}</h3> 
        </div>
    )}

    Todo.propTypes={
        item: checkPropTypes?.object
    }
export default Todo;