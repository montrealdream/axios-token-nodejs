# TRIỂN KHAI SỬ DỤNG REFRESH TOKEN ĐỂ TẠO ACCESS TOKEN MỚI
-  Với cách này sẽ verify AccessToken trước khi có một request => giảm được một lần thực thi
-  Nhược điểm của nó là cái thời gian so với expired có thể sẽ dài dẫn đến hacker có thể chiếm được
