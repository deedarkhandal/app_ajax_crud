<?php include( './constant.php' );
?>
<!DOCTYPE html>
<html lang = 'en'>
<head>
<?php include( './partial/register_head.php' );
?>

</head>
<body>

<div class="container">
<h2>LISTING TABLE</h2>
<p class = 'delete'></p>
<p class = 'success'></p>
<button type = 'button' id = 'asc' class = 'btn btn-secondary asc' data-bs-container = 'body' data-bs-toggle = 'popover' data-bs-placement = 'top' data-bs-content = 'Top popover'>
Ascending
</button>
<button type = 'button'  id = 'des' class = 'btn btn-secondary des' data-bs-container = 'body' data-bs-toggle = 'popover' data-bs-placement = 'right' data-bs-content = 'Right popover'>
Descending
</button></hr>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#activeUsers" role="tab" aria-controls="home" aria-selected="true">Active(<span class="totalactiveuser"></span>)</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#blockedUsers" role="tab" aria-controls="profile" aria-selected="false">Blocked(<span class="totalblockeduser"></span>)</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active " id="activeUsers" role="tabpanel" aria-labelledby="home-tab">
      <table class="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Block</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody id="tBody">
        </tbody>
      </table>
  </div>
  <div class="tab-pane fade" id="blockedUsers" role="tabpanel" aria-labelledby="profile-tab">
  <table class="table" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Delete</th>
            <th>Active</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody id="blockedUsers--Body">
        </tbody>
      </table>
  </div>
</div> 
</div>

<footer>
<?php include( './partial/footer_script.php' );
?>
</footer>
<?php include_once( './edit_modal.php' );
?>
</body>
</html>