<div id="editFormModal"  class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

<div class="container">
<form id="editForm">
  <p class='success'></p>
  <div class="form-group">
    <label for="fname">First Name</label>
    <input type="text" class="form-control f_name" id="f_name"  name="f_name" aria-describedby="fname" placeholder="Enter First Name">
    <p class='error error-f_name'></p>
  </div>
  <div class="form-group">
    <label for="lname">Last Name</label>
    <input type="text" class="form-control l_name" id="l_name"  name="l_name"aria-describedby="lname" placeholder="Enter Last Name">
    <p class='error error-l_name'></p>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control email" id="email"  name="email" aria-describedby="emailHelp" placeholder="Enter email">
    <p class='error error-email'></p>
    <p class='email_success'></p>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control password" id="pass" name="pass" placeholder="Password">
    <p class='error error-pass'></p>
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="text" class="form-control phone" id="phone" name="phone" aria-describedby="phone" placeholder="Enter Phone">
    <p class='error error-phone'></p>
  </div>
  <div class="form-group">
    <label for="address">address</label>
    <textarea type="text" class="form-control address" id="address"  name="address" aria-describedby="address" placeholder="Enter address"></textarea>
    <p class='error error-address'></p>
  </div>
  <input type ="hidden" name="id"  class="user_id"  value=" "/>
</div>
      
    </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
    </form>
  </div>
</div>