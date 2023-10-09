import React from 'react';

const ConfirmationModal = ({ isopen,onConfirm }) => {
    const handclick=(e)=>{
        onConfirm(e)
        isopen(false);

    }
  return (
    <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>handclick(false)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to proceed?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onClick={()=>{handclick(true)}}> Confirm</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={()=>{handclick(false)}}>Cancel</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ConfirmationModal;
