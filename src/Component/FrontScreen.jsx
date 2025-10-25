import React, { useState } from 'react';
import SegmentModal from './SegmentModal';
import './Style.css';

function FrontScreen() {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      title: "Easy Setup",
      desc: "Create segments in seconds without complicated steps.",
      color: "#6EE7B7"
    },
    {
      title: "Real-Time Updates",
      desc: "Monitor and adjust your segments dynamically.",
      color: "#60A5FA"
    },
    {
      title: "Seamless Integration",
      desc: "Works perfectly with your existing React app.",
      color: "#A78BFA"
    },
  ];

  return (
    <>
      <div className="frontscreen-container text-center d-flex flex-column align-items-center justify-content-center">

        <header className="header-section text-white">
          <h1 className="display-3 fw-bold mb-3">
            Build Segments <span className="highlight-text">Effortlessly</span>
          </h1>
          <p className=" mb-5 text-dark fw-bold text-md">
            Quickly create and manage your segments. Organize your data, analyze insights, and make decisions faster than ever. 🚀
          </p>
        </header>

        <p className="mb-2">Start by creating a new segment 👇</p>
        <button
          className="btn btn-gradient text-light fw-bold d-flex justify-content-center btn-lg mb-5"
          onClick={() => setShowModal(true)}
        >
          Create New Segment
        </button>

        <div className="row w-100 justify-content-center">
          {features.map((f, i) => (
            <div key={i} className="col-md-3 mb-4 d-flex">
              <div className="feature-card p-4 text-white flex-fill d-flex flex-column h-100">
                <h3 className="fw-bold mb-3">{f.title}</h3>
                <p className="flex-grow-1">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {showModal && <SegmentModal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default FrontScreen;