import React, { useState } from "react";
import "./Style.css";

const schemaOptions = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" }
];

export default function SegmentModal({ onClose }) {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [tempSchema, setTempSchema] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const availableOptions = schemaOptions.filter(
    (o) => !selectedSchemas.some((s) => s.value === o.value)
  );

  const addSchema = () => {
    if (!tempSchema) return;
    const selected = schemaOptions.find((op) => op.value === tempSchema);
    setSelectedSchemas([...selectedSchemas, selected]);
    setTempSchema("");
  };

  const updateSchema = (index, value) => {
    const updated = [...selectedSchemas];
    updated[index] = schemaOptions.find((op) => op.value === value);
    setSelectedSchemas(updated);
  };

  const [errors, setErrors] = useState({});

  const submitData = () => {
    let newErrors = {};

    if (!segmentName.trim()) {
      newErrors.segmentName = "Please enter a segment name";
    }

    if (selectedSchemas.length === 0 && !tempSchema) {
      newErrors.schemas = "Please add at least one schema";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      segment_name: segmentName,
      schema: selectedSchemas.map((item) => ({
        [item.value]: item.label,
      })),
    };

    const savedSegments = JSON.parse(localStorage.getItem("segments")) || [];
    savedSegments.push(payload);
    localStorage.setItem("segments", JSON.stringify(savedSegments));

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setSegmentName("");
      setSelectedSchemas([]);
      setTempSchema("");
      onClose();
      setErrors({});
    }, 1500);
  };

  const close = () => {
    setSegmentName("");
    setSelectedSchemas([]);
    setTempSchema("");
    onClose();
  };

  return (
    <>
      <div className="modal fade show d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.73)" }}>
        <div className="modal-dialog w-50">
          <div className="modal-content p-4 shadow-lg">

            <h4 className="mb-3 fw-bold text-center">Create New Segment</h4>

            <div className="mb-3">
              <label className="form-label">Enter Segment Name</label>
              <input
                className="form-control"
                placeholder="Name of the segment"
                value={segmentName}
                onChange={(e) => {
                  setSegmentName(e.target.value);

                  if (e.target.value.trim() === "") {
                    setErrors(prev => ({ ...prev, segmentName: "Segment Name is required" }));
                  } else {
                    setErrors(prev => ({ ...prev, segmentName: "" }));
                  }
                }}
              />
              {errors.segmentName && (
                <small className="text-danger d-flex justify-content-start">{errors.segmentName}</small>
              )}

            </div>

            {selectedSchemas.length > 0 && (
              <div className="mb-3 schema-box">
                {selectedSchemas.map((item, i) => (
                  <select
                    key={i}
                    className="form-select mb-2"
                    value={item.value}
                    onChange={(e) => updateSchema(i, e.target.value)}
                  >
                    {[item, ...availableOptions]
                      .filter((op, idx, arr) => idx === arr.findIndex(x => x.value === op.value))
                      .map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                  </select>
                ))}
              </div>
            )}

            <div className="mb-3">
              <select
                className="form-select"
                value={tempSchema}
                onChange={(e) => {
                  const value = e.target.value;
                  setTempSchema(value);

                  if (value === "") {
                    setErrors(prev => ({ ...prev, schemas: "Please select a schema" }));
                  } else {
                    setErrors(prev => ({ ...prev, schemas: "" }));
                  }
                }}
              >
                <option value="">Add schema to segment</option>
                {availableOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {errors.schemas && (
                <small className="text-danger text-start d-block mt-1">
                  {errors.schemas}
                </small>
              )}
            </div>

            <p className="add-link text-start" onClick={addSchema}>+ Add new schema</p>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn green" onClick={submitData}>
                Save Segment
              </button>
              <button className="btn pink" onClick={close}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>

      {showAlert && (
        <div className="alert-modal">
          <div className="alert-box text-center">
            <h5 className="mb-3">✅ Segment Saved Successfully!</h5>
            <button
              className="btn btn-success px-4"
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

    </>
  );
}
