server {     
    listen 443;      
    listen [::]:443;      
    server_name https://penkyarena.com;      
    root /var/www/penkyio-fe/dist/penkyio-fe;   
    server_tokens off;   
    index index.html index.htm;     
 
    location / {
        autoindex on;
        autoindex_exact_size on;
        root /var/www/penkyio-fe/dist/penkyio-fe;
    }
}