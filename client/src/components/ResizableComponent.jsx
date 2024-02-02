import React, { useEffect, useState } from "react";
import { Resizable } from "re-resizable";
import { addDataAPI, getCountAPI, updateDataAPI } from "../api/api";
import '../App.css';

const ResizableComponent = () => {
  const [sizes, setSizes] = useState({
    component1: { width: 300, height: 200 },
    component2: { width: 300, height: 200 },
    component3: { width: 300, height: 200 }
  });
  const [data, setData] = useState("");
  const [message, setMessage] = useState('');

  const handleResize = (component, direction, ref, delta) => {
    const newSize = {
      width: sizes[component].width + delta.width,
      height: sizes[component].height + delta.height
    };

    setSizes(prevSizes => ({
      ...prevSizes,
      [component]: newSize
    }));
  };

  const handleAddData = async () => {
    try {
      const addedData = await addDataAPI({ text: data });
      console.log(addedData);
      alert('Data added successfully');
      setMessage(addedData.text); // Update the state with the added data text
    } catch (error) {
      alert('Failed to add data');
    }
  };

  const handleUpdateData = async () => {
    try {
      const updatedData = await updateDataAPI({ text: data });

      alert('Data updated successfully');
      setMessage(updatedData.text); // Update the state with the updated data text
    } catch (error) {
      alert('Failed to update data');
    }
  };

  const handleCount = () => {
    const currentCount = getCountAPI(); // Call the API to get the count
    console.log(currentCount);
    alert(`Count: ${currentCount}`);
  };

  const handleDataChange = (event) => {
    setData(event.target.value);
  };

  // Image URL
  const imageUrl = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D";

  return (
    <div>
      <div style={{ display: "flex", gap:'200px', marginBottom: "350px" }}>
        <Resizable
          size={sizes.component1}
          onResize={(e, direction, ref, delta) =>
            handleResize("component1", direction, ref, delta)
          }
          handleComponent={{
            top: <div className="handle top" />,
            right: <div className="handle right" />,
            bottom: <div className="handle bottom" />,
            left: <div className="handle left" />,
            topRight: <div className="handle top-right" />,
            bottomRight: <div className="handle bottom-right" />,
            bottomLeft: <div className="handle bottom-left" />,
            topLeft: <div className="handle top-left" />
          }}
          style={{ marginRight: 10 }}
        >
          <div style={{ backgroundColor: "lightblue", padding: 10 }}>
            <img src={imageUrl} alt="Placeholder" style={{ maxWidth: "100%", height: "auto" }} />
            <h2>Component 1</h2>
            <h2>{message}</h2>
            <input type="text" placeholder="Type the Heading" value={data} onChange={handleDataChange} />
            <button className="button blue" onClick={handleAddData}>Add</button>
            <button className="button green" onClick={handleUpdateData}>Update</button>
            <button className="button orange" onClick={handleCount}>Count</button>
          </div>
        </Resizable>
        <Resizable
          size={sizes.component2}
          onResize={(e, direction, ref, delta) =>
            handleResize("component2", direction, ref, delta)
          }
          handleComponent={{
            top: <div className="handle top" />,
            right: <div className="handle right" />,
            bottom: <div className="handle bottom" />,
            left: <div className="handle left" />,
            topRight: <div className="handle top-right" />,
            bottomRight: <div className="handle bottom-right" />,
            bottomLeft: <div className="handle bottom-left" />,
            topLeft: <div className="handle top-left" />
          }}
          style={{ marginRight: 10 }}
        >
          <div style={{ backgroundColor: "lightgreen", padding: 10 }}>
            <img src={imageUrl} alt="Placeholder" style={{ maxWidth: "100%", height: "auto" }} />
            <h2>Component 2</h2>
            <h2>{message}</h2>
            <input type="text" placeholder="Type the Heading" value={data} onChange={handleDataChange} />
            <button className="button blue" onClick={handleAddData}>Add</button>
            <button className="button green" onClick={handleUpdateData}>Update</button>
            <button className="button orange" onClick={handleCount}>Count</button>
          </div>
        </Resizable>
      </div>
      <Resizable
        size={sizes.component3} 
        onResize={(e, direction, ref, delta) =>
          handleResize("component3", direction, ref, delta)
        }
        handleComponent={{
          top: <div className="handle top" />,
          right: <div className="handle right" />,
          bottom: <div className="handle bottom" />,
          left: <div className="handle left" />,
          topRight: <div className="handle top-right" />,
          bottomRight: <div className="handle bottom-right" />,
          bottomLeft: <div className="handle bottom-left" />,
          topLeft: <div className="handle top-left" />
        }}
      >
        <div style={{ backgroundColor: "lightcoral", padding: 10 }}>
          <img src={imageUrl} alt="Placeholder" style={{ maxWidth: "100%", height: "auto" }} />
          <h2>Component 3</h2>
          <h2>{message}</h2>
          <input type="text" placeholder="Type the Heading" value={data} onChange={handleDataChange} />
          <button className="button blue" onClick={handleAddData}>Add</button>
          <button className="button green" onClick={handleUpdateData}>Update</button>
          <button className="button orange" onClick={handleCount}>Count</button>
        </div>
      </Resizable>
    </div>
  );
};

export default ResizableComponent;
