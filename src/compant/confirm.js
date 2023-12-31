import React,{useState} from "react";

const ConfirmationModal = ({ isopen, onConfirm }) => {
  const[notification,setnft]=useState(false);
  const handclick = (e) => {
    console.log(e);
    onConfirm(e);
    if(!e){
      isopen(false);
    }else{
    setnft(true);
  }
  };
if(notification)
  return (
    <div id="n-div">
      <div id="notification">
        <p id="text">Your seat is book!</p>
        <button id="btn1" onClick={()=>isopen(false)}>OK</button>
      </div>
    </div>
  );
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => handclick(false)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to proceed?</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                handclick(true);
              }}
            >
              Confirm
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                handclick(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
