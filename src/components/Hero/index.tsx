import { Button } from "react-bulma-components";
import img from "../../assets/aw.jpg";
export default function index() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src={img}
        alt="Description of the image"
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <input
          placeholder="Search..."
          type="text"
          style={{ width: "450px", padding: "10px", borderRadius: "12px" }}
        />
        <Button style={{ marginLeft: "10px" }}>👓</Button>
      </div>
    </div>
  );
}
