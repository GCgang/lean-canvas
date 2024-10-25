import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import { useState, useEffect } from 'react';
import { getCanvasById, updateCanvas, updateTitle } from '../api/cavas';

export default function CanvasDetail() {
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleTitleChange = async (title) => {
    try {
      await updateTitle(id, title);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleCanvasChange = async (updatedCanvas) => {
    try {
      await updateCanvas(id, updatedCanvas);
      setCanvas(updatedCanvas);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      <CanvasTitle value={canvas?.title} onChange={handleTitleChange} />
      {canvas && (
        <LeanCanvas canvas={canvas} onCanvasChange={handleCanvasChange} />
      )}
    </>
  );
}
