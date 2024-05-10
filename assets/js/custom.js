$(document).ready(function () {

    let f_name = '';
    let l_name = '';
    let email = '';
    let pass = '';
    let phone = '';
    let address = '';
    let error = 0;

    $('#f_name').on('keydown keypress keyup', function (e) {
        f_name = $(this).val();
        getSuggestion(f_name);
    });

    $('#l_name').change(function (e) {
        l_name = $(this).val();
    });
    $('#email').change(function (e) {
        email = $(this).val();
    });
    $('#email').on('keydown keypress keyup', function (e) {
        $('.email_success').html('');
        email = $(this).val();
        isEmailExist(email);
    });
    $('#pass').change(function (e) {
        pass = $(this).val();
    });
    $('#phone').change(function (e) {
        phone = $(this).val();
    });
    $('#address').change(function (e) {
        address = $(this).val();
    });


    $('#registerForm').submit(function (e) {

        e.preventDefault();
        console.log($('#registerForm').serialize());
        error = 0;
        let is_validated = validate();

        if (is_validated) {
            $.ajax({
                type: 'post',
                url: base_url + 'server/server.php',
                data: $('#registerForm').serialize(),
                success: function (data) {
                    let response = jQuery.parseJSON(data);
                    if (response.is_success == true) {
                        console.log(response.message);
                        $('.success').html(response.message);
                        $('.success').css('color', 'green');
                    }

                }
            })
        }


    });
    function isEmailExist(email) {
        $.ajax({
            type: 'post',
            url: base_url + 'server/is_email.php',
            data: { 'email': email },

            success: function (data) {

                let response = jQuery.parseJSON(data);
                if (response.is_success == true) {
                    $('.email_success').html(response.message);
                    $('.email_success').css('color', 'green');
                    error = error + 1;
                }
            }

        })

    }


    function getSuggestion(f_name) {
        jQuery('.suggestion-container').html('');
        $.ajax({
            type: 'POST',
            url: base_url + 'server/get_suggestion.php',
            datatype: 'json',
            data: { 'f_name': f_name },

            success: function (data) {
                let response = jQuery.parseJSON(data);
                if (response.is_success == true) {

                    let html = "<ul class = 'list-group'>";
                    jQuery.each(response.data, function (key, value) {

                        html = html + "<li class = 'list-group-item'><a type='button' class='btn btn-secondary wcp-suggestion' data-id = '" + value.id + "' >" + value.f_name + " " + value.l_name + "</a></li>";
                    });

                    html = html + '</ul>';
                    jQuery('.suggestion-container').html(html);

                }



            }
        })
    }

    function getUserComplete_Detail(id) {

        $.ajax({
            type: 'POST',
            datatype: 'json',
            url: base_url + 'server/edit_user_detail.php',
            data: { 'id': id },

            success: function (data) {

                let response = jQuery.parseJSON(data);

                if (response.is_success == true) {

                    let user_detail = response.data;

                    f_name = user_detail.f_name;
                    l_name = user_detail.l_name;
                    email = user_detail.email;
                    pass = user_detail.pass;
                    phone = user_detail.phone;
                    address = user_detail.address;

                    jQuery('#registerForm .f_name').val(user_detail.f_name);
                    jQuery('#registerForm .l_name').val(user_detail.l_name);
                    jQuery('#registerForm .email').val(user_detail.email);
                    jQuery('#registerForm .pass').val(user_detail.pass);
                    jQuery('#registerForm .phone').val(user_detail.phone);
                    jQuery('#registerForm .address').val(user_detail.address);
                    jQuery('#registerForm .id').val(user_detail.id);
                    jQuery('.suggestion-container').html('');
                }
            }
        })
    }


    $(document).on('click', '.wcp-suggestion', function () {
        let id = $(this).data('id');

        getUserComplete_Detail(id);

    })


    function validate() {

        if (f_name == '') {
            $('.error-f_name').html('* this field is required!');
            $('.error-f_name').css('color', 'red');
            error = error + 1;
        }
        if (l_name == '') {
            $('.error-l_name').html('*this field is required!');
            $('.error-l_name').css('color', 'red');
            error = error + 1;
        }
        if (email == '') {
            $('.error-email').html('* this field is required !');
            $('.error-email').css('color', 'red');
            error = error + 1;
        }
        if (pass == '') {
            $('.error-pass').html('* this field is required !');
            $('.error-pass').css('color', 'red');
            error = error + 1;
        }
        if (phone == '') {
            $('.error-phone').html(' * this field i required !');
            $('.error-phone').css('color', 'red');
            error = error + 1;
        }
        if (address == '') {
            $('.error-address').html(' * this field is required !');
            $('.error-address').css('colour', 'red');
            error = error + 1;
        }
        if (error == 0) {
            return true;
        }
        return false;
    }


    function onLoad() {
        $.ajax({
            type: 'GET',
            url: base_url + 'server/server_listing.php',
            datatype: 'jason',

            success: function (data) {

                let response = jQuery.parseJSON(data);
                let table_body_html = '';
                if (response.is_success == true) {

                    let user_data = response.data;
                    let total_rows = response.total_rows;
                    console.log(user_data);

                    jQuery.each(user_data, function (key, value) {

                        let tr = '<tr><td>' + value.id + '</td><td>' + value.f_name + '</td><td>' + value.l_name + '</td>\
                        <td>'+ value.email + '</td><td>' + value.pass + '</td><td>' + value.phone + '</td><td>' + value.address + '</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+ value.id + '" >Delete</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-block" data-id = "'+ value.id + '" >Block</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id = "'+ value.id + '" >Edit</a></td></tr>'
                        table_body_html = table_body_html + tr;
                    });


                    $('#tBody').html(table_body_html);
                    $('.totalactiveuser').html(total_rows);

                }
            }
        })
    }
    onLoad();
    blockedUser();

    $(document).on('click', '.wcp-delete', function () {
        let id = $(this).data('id');
        
        $.ajax({

            type: 'POST',
            url: base_url + 'delete.php',
            datatype: 'json',
            data: { 'id': id },

            success: function (data) {

                let response = jQuery.parseJSON(data);

                if (response.is_success == true) {

                    $('.delete').html(response.message);
                    $('.delete').css('color', 'orange');
                    onLoad();
                    blockedUser();
                } else {
                    $('.delete').html(response.message);
                    $('.delete').css('color', 'orange');
                }
            }
        })
    });

    $(document).on('click', '.wcp-edit', function () {
        let id = $(this).data('id');

        getUserdetail(id);

    });
    $(document).on('click', '#home-tab', function () {
        onLoad();
    })
    $(document).on('click', '#profile-tab', function () {
        blockedUser();
    })
    // $(document).on('click','.wcp-block',function(){
    //     onLoad();
    //     blockedUser();
    // })
    // $(document).on('click','wcp-active',function(){
    //     onLoad();
    // })



    function getUserdetail(id) {
        $.ajax({
            type: 'POST',
            url: base_url + 'server/edit_user_detail.php',
            datatype: 'jason',
            data: { 'id': id },
            success: function (data) {
                let response = jQuery.parseJSON(data);

                if (response.is_success == true) {

                    let user_detail = response.data;

                    f_name = user_detail.f_name;
                    l_name = user_detail.l_name;
                    email = user_detail.email;
                    pass = user_detail.pass;
                    phone = user_detail.phone;
                    address = user_detail.address;

                    jQuery('#editForm .f_name').val(user_detail.f_name);
                    jQuery('#editForm .l_name').val(user_detail.l_name);
                    jQuery('#editForm .email').val(user_detail.email);
                    jQuery('#editForm .password').val(user_detail.pass);
                    jQuery('#editForm .phone').val(user_detail.phone);
                    jQuery('#editForm .address').val(user_detail.address);
                    jQuery('#editForm .user_id').val(user_detail.id);
                    jQuery('#editFormModal').modal('show');

                }

            }
        })
    }
    $('#editForm').submit(function (e) {
        e.preventDefault();
        error = 0;
        is_validated = validate();
        if (is_validated) {
            $.ajax({
                type: 'POST',
                url: base_url + 'server/update.php',
                datatype: 'Json',
                data: $('#editForm').serialize(),
                success: function (data) {
                    let response = jQuery.parseJSON(data);
                    if (response.is_success == true) {
                        $('.success').html(response.message);
                        $('.success').css('color', 'green');
                        onLoad();
                    } else {
                        $('.success').html(response.message);
                        $('.success').css('color', 'red');
                    }
                }

            })
        }

    })

    $(document).on('click', '.des', function () {
        let id = 'des';
        $.ajax({
            type: 'POST',
            url: base_url + "server/descending.php",
            datatype: 'json',
            data: { 'id': id },
            success: function (data) {
                let response = jQuery.parseJSON(data);
                let table_body_html = '';
                if (response.is_success == true) {
                    let user_data = response.data;
                    console.log(user_data);

                    jQuery.each(user_data, function (key, value) {

                        let tr = '<tr><td>' + value.id + '</td><td>' + value.f_name + '</td><td>' + value.l_name + '</td>\
                        <td>'+ value.email + '</td><td>' + value.pass + '</td><td>' + value.phone + '</td><td>' + value.address + '</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+ value.id + '" >Delete</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-block" data-id = "'+ value.id + '" >Block</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-active" data-id = "'+ value.id + '" >Active</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id = "'+ value.id + '" >Edit</a></td></tr>'
                        table_body_html = table_body_html + tr;
                    });


                    $('#tBody').html(table_body_html);


                }
            }

        })

    })

    $(document).on('click', '.wcp-block', function () {

        let id = $(this).data('id');
        $.ajax({
            type: 'POST',
            url: base_url + 'server/blockuserdetail.php',
            datatype: 'json',
            data: { 'id': id },
            success: function (data) {
                let response = jQuery.parseJSON(data);
                if (response.is_success == true) {
                    $('.success').html(response.message);
                    $('.success').css('color', 'red');
                    onLoad();
                    blockedUser();
                } else {
                    $('.success').html(response.message);
                    $('.success').css('color', 'red');
                }

            }
        })
    })

    $(document).on('click', '.wcp-active', function () {
        let id = $(this).data('id');
        $.ajax({
            type: 'POST',
            url: base_url + 'server/activeuser.php',
            datatype: 'json',
            data: { 'id': id },
            success: function (data) {
                let response = jQuery.parseJSON(data);
                if (response.is_success == true) {
                    $('.success').html(response.message);
                    $('.success').css('color', 'red');
                    blockedUser();
                    onLoad();
                } else {
                    $('.success').html(response.message);
                    $('.success').css('color', 'red');
                }
            }
        })
    })





    $(document).on('click', '.asc', function () {
        let id = "asc";
        $.ajax({
            type: 'POST',
            url: base_url + 'server/descending.php',
            datatype: 'json',
            data: { 'id': id },
            success: function (data) {
                let response = jQuery.parseJSON(data);
                let table_body_html = '';
                if (response.is_success == true) {
                    let user_data = response.data;
                    console.log(user_data);

                    jQuery.each(user_data, function (key, value) {


                        let tr = '<tr><td>' + value.id + '</td><td>' + value.f_name + '</td><td>' + value.l_name + '</td>\
                        <td>'+ value.email + '</td><td>' + value.pass + '</td><td>' + value.phone + '</td><td>' + value.address + '</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+ value.id + '" >Delete</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-block" data-id = "'+ value.id + '" >Block</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-active" data-id = "'+ value.id + '" >Active</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id = "'+ value.id + '" >Edit</a></td></tr>'
                        table_body_html = table_body_html + tr;
                    });


                    $('#tBody').html(table_body_html);


                }
            }
        })
    })


    function blockedUser() {
        $.ajax({
            type: 'GET',
            url: base_url + 'server/blockuserlist.php',
            datatype: 'jason',

            success: function (data) {

                let response = jQuery.parseJSON(data);
                let table_body_html = '';
                if (response.is_success == true) {

                    let user_data = response.data;
                    let total_rows = response.total_rows;
                    console.log(user_data);

                    jQuery.each(user_data, function (key, value) {


                        let tr = '<tr><td>' + value.id + '</td><td>' + value.f_name + '</td><td>' + value.l_name + '</td>\
                        <td>'+ value.email + '</td><td>' + value.pass + '</td><td>' + value.phone + '</td><td>' + value.address + '</td>\
                        <td><a type="button" class="btn btn-danger wcp-delete" data-id = "'+ value.id + '" >Delete</a></td>\
                        <td><a type="button" class="btn btn-danger wcp-active" data-id = "'+ value.id + '" >Active</a></td>\
                        <td><a type="button" class="btn btn-primary wcp-edit" data-id = "'+ value.id + '" >Edit</a></td></tr>'
                        table_body_html = table_body_html + tr;
                    });


                    $('#blockedUsers--Body').html(table_body_html);
                    $('.totalblockeduser').html(total_rows);

                }
            }
        })

    }






});
