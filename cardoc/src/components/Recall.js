import React from "react";

function Recall({ recall }) {
  return (
    <>
      <div class="pb-4">
        <h3>
          Recall Date: {recall.recall_date}
          <br />
          Campaign Number: {recall.campaign_number}
          <br />
          Recall Number: {recall.recall_number}
        </h3>
        <h4>
          <strong>Consequence:</strong> {recall.consequence}
        </h4>
        <p>
          <strong>Description:</strong> {recall.desc}
          <br />
          <strong>Corrective Action:</strong> {recall.corrective_action}
        </p>
      </div>
    </>
  );
}

export default Recall;
