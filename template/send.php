<?php 
    $url = "https://fcm.googleapis.com/fcm/send";
    $server_key = "BGfzLFA5hoAcwu8j3jo6Phwa0otj-CglxbruXYbP809ujEkOjr2WdFJ3Hiwgz-LjH7XbpbwK7x6vxBRkdCiq4SQ";
    $message = array(
        "data" => array(
            "title" => "Title Demo ABC",
            "body" => "This is message body",
            "icon" => "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1024px-Flat_tick_icon.svg.png?20170316053531",
            "image"=> "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3hZfddOzK3vcA4iWkrWEkmtHXfgzw_iFxjg&usqp=CAU",
            "click_action" => "https://example.com"
        ),
        "registration_ids" => [
            'exgWB3GyT9csuGVkVHHPxQ:APA91bGUAE8Ro5ixq6BGAtBJ7QhchlvwptHNQ7j0XgtbvlQu0b6H29tWVqxnJrwuuaJF02Q7BxGmUfB9fOysU48C12FhPjRy0wCCSkpRiAITN0_iCCxNUiQTcT2cdRTfMKtsjBWjQKLk'
        ]
    );
    $messageJson = json_encode($message);

    // echo "<p>" . $messageJson . "</p>";

    $options = array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => array(
            "Authorization: key=" . $server_key,
            "Content-Type: application/json",
        ),
        CURLOPT_POSTFIELDS => json_encode($message),
    );

    $curl  = curl_init();
    curl_setopt_array($curl,$options);
    $response = curl_exec($curl);
    if($response === false){
        echo  "Error sending messages: " . curl_error($curl);
    }else{
        echo  "Message sent success" . curl_error($curl);
    }
?>