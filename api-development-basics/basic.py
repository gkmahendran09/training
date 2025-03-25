# name = input("What is your name?")
# print("Hello ", name)

# Import the HTTP server module
from http.server import HTTPServer, BaseHTTPRequestHandler

# Define the request handler class
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    # Handle GET requests
    def do_GET(self):
        # Set response status code
        self.send_response(200)
        # Set headers
        self.send_header('Content-type', 'text/html')
        # Add CORS headers
        self.send_header("Access-Control-Allow-Origin", "*")  # Allow requests from any origin
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")  # Allow specific HTTP methods
        self.send_header("Access-Control-Allow-Headers", "Content-type")  # Allow specific headers
        
        self.end_headers()

        # Send response body
        # self.wfile.write(b"<html><body><h1>Hello, asfdadsf!</h1></body></html>")

        with open('data.txt', 'r') as file:
            # Read the contents of the file
            file_contents = file.read()
            # Print the contents of the file
            print(file_contents)
        self.wfile.write(str(file_contents).encode('utf-8'))

    
    def do_POST(self):
        # Set response status code
        self.send_response(200)

        self.send_header('Content-type', 'text/html')
        # Add CORS headers
        self.send_header("Access-Control-Allow-Origin", "*")  # Allow requests from any origin
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")  # Allow specific HTTP methods
        self.send_header("Access-Control-Allow-Headers", "Content-type")  # Allow specific headers
        
        self.end_headers()

        with open('data.txt', 'w') as file:
            file.write("Welcome to Python programming!!!")
        
        self.wfile.write(b"<html><body><h1>File is updated</h1></body></html>")

# Define the server address and port
server_address = ('', 8000)

# Create an instance of the HTTP server with the request handler class
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

# Start the HTTP server
print('Server running...')
httpd.serve_forever()

