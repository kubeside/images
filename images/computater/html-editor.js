const editor = document.getElementById('htmlEditor');
        const preview = document.getElementById('preview');
        const status = document.getElementById('status');
        const lineNumbers = document.getElementById('lineNumbers');

        // Update preview in real-time
        function updatePreview() {
            try {
                const htmlContent = editor.value;
                
                // Use srcdoc instead of blob URLs for better compatibility
                preview.srcdoc = htmlContent;
                
                status.textContent = 'Updated';
                status.className = 'status success';
            } catch (error) {
                status.textContent = 'Error: ' + error.message;
                status.className = 'status error';
            }
        }

        // Update line numbers
        function updateLineNumbers() {
            const lines = editor.value.split('\n').length;
            let lineNumbersHTML = '';
            for (let i = 1; i <= lines; i++) {
                lineNumbersHTML += i + '\n';
            }
            lineNumbers.textContent = lineNumbersHTML;
        }

        // Clear editor
        function clearEditor() {
            editor.value = '';
            updatePreview();
            updateLineNumbers();
        }

        // Format code (basic indentation)
        function formatCode() {
            let code = editor.value;
            let formatted = '';
            let indent = 0;
            const lines = code.split('\n');
            
            lines.forEach(line => {
                const trimmed = line.trim();
                if (trimmed.startsWith('</') && !trimmed.includes('/>')) {
                    indent = Math.max(0, indent - 1);
                }
                formatted += '  '.repeat(indent) + trimmed + '\n';
                if (trimmed.startsWith('<') && !trimmed.startsWith('</') && !trimmed.includes('/>') && !trimmed.includes('<!')) {
                    indent++;
                }
            });
            
            editor.value = formatted;
            updatePreview();
            updateLineNumbers();
        }

        // Download HTML file
        function downloadHTML() {
            const htmlContent = editor.value;
            const blob = new Blob([htmlContent], { type: 'text/html' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'my-html-page.html';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        // Load example code
        function loadExample(type) {
            const examples = {
                basic: `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Basic HTML Page</title>
                            </head>
                            <body>
                                <h1>Hello World!</h1>
                                <p>Denne er enkel side!.</p>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </body>
                        </html>`,
                form: `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Contact Form</title>
                                <style>
                                    body { font-family: Arial, sans-serif; margin: 40px; }
                                    .form-group { margin-bottom: 15px; }
                                    label { display: block; margin-bottom: 5px; font-weight: bold; }
                                    input, textarea { width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px; }
                                    button { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
                                    button:hover { background: #0056b3; }
                                </style>
                            </head>
                            <body>
                                <h1>Contact Form</h1>
                                <form>
                                    <div class="form-group">
                                        <label for="name">Name:</label>
                                        <input type="text" id="name" name="name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email:</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="message">Message:</label>
                                        <textarea id="message" name="message" rows="4" required></textarea>
                                    </div>
                                    <button type="submit">Send Message</button>
                                </form>
                            </body>
                        </html>`,
                table: `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>Data Table</title>
                                <style>
                                    body { font-family: Arial, sans-serif; margin: 40px; }
                                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                                    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
                                    th { background-color: #f2f2f2; font-weight: bold; }
                                    tr:hover { background-color: #f5f5f5; }
                                    .number { text-align: right; }
                                </style>
                            </head>
                            <body>
                                <h1>Sales Report</h1>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Category</th>
                                            <th class="number">Pris</th>
                                            <th class="number">Solgt</th>
                                            <th class="number">Profitt</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Laptop</td>
                                            <td>Electronics</td>
                                            <td class="number">$999</td>
                                            <td class="number">25</td>
                                            <td class="number">$24,975</td>
                                        </tr>
                                        <tr>
                                            <td>Smartphone</td>
                                            <td>Electronics</td>
                                            <td class="number">$699</td>
                                            <td class="number">40</td>
                                            <td class="number">$27,960</td>
                                        </tr>
                                        <tr>
                                            <td>Headphones</td>
                                            <td>Audio</td>
                                            <td class="number">$199</td>
                                            <td class="number">60</td>
                                            <td class="number">$11,940</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </body>
                        </html>`,
                flexbox: `<!DOCTYPE html>
                            <html lang="en">
                                <head>
                                    <meta charset="UTF-8">
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                    <title>Flexbox Layout</title>
                                    <style>
                                        body { font-family: Arial, sans-serif; margin: 0; }
                                        .container { display: flex; min-height: 100vh; }
                                        .sidebar { background: #2c3e50; color: white; width: 250px; padding: 20px; }
                                        .main { flex: 1; padding: 20px; background: #ecf0f1; }
                                        .cards { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; }
                                        .card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); flex: 1; min-width: 250px; }
                                        .nav-item { padding: 10px 0; border-bottom: 1px solid #34495e; cursor: pointer; }
                                        .nav-item:hover { background: #34495e; margin: 0 -20px; padding-left: 20px; }
                                    </style>
                                </head>
                                <body>
                                    <div class="container">
                                        <div class="sidebar">
                                            <h2>Navigation</h2>
                                            <div class="nav-item">Dashboard</div>
                                            <div class="nav-item">Products</div>
                                            <div class="nav-item">Orders</div>
                                            <div class="nav-item">Customers</div>
                                            <div class="nav-item">Settings</div>
                                        </div>
                                        <div class="main">
                                            <h1>Dashboard</h1>
                                            <p>Welcome to your dashboard! This layout uses CSS Flexbox.</p>
                                            <div class="cards">
                                                <div class="card">
                                                    <h3>Total Sales</h3>
                                                    <p>$45,230</p>
                                                </div>
                                                <div class="card">
                                                    <h3>New Orders</h3>
                                                    <p>127</p>
                                                </div>
                                                <div class="card">
                                                    <h3>Customers</h3>
                                                    <p>1,429</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </body>
                            </html>`,
                animation: `<!DOCTYPE html>
                            <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <title>CSS Animations</title>
                                <style>
                                    body { 
                                        font-family: Arial, sans-serif; 
                                        margin: 0; 
                                        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
                                        background-size: 400% 400%;
                                        animation: gradientShift 8s ease infinite;
                                        min-height: 100vh;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                    }
                                    
                                    @keyframes gradientShift {
                                        0% { background-position: 0% 50%; }
                                        50% { background-position: 100% 50%; }
                                        100% { background-position: 0% 50%; }
                                    }
                                    
                                    .container {
                                        text-align: center;
                                        background: rgba(255, 255, 255, 0.9);
                                        padding: 40px;
                                        border-radius: 20px;
                                        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                                    }
                                    
                                    .bouncing-ball {
                                        width: 50px;
                                        height: 50px;
                                        background: #ff6b6b;
                                        border-radius: 50%;
                                        margin: 20px auto;
                                        animation: bounce 2s infinite;
                                    }
                                    
                                    @keyframes bounce {
                                        0%, 100% { transform: translateY(0); }
                                        50% { transform: translateY(-30px); }
                                    }
                                    
                                    .rotating-square {
                                        width: 60px;
                                        height: 60px;
                                        background: #4ecdc4;
                                        margin: 20px auto;
                                        animation: rotate 3s linear infinite;
                                    }
                                    
                                    @keyframes rotate {
                                        from { transform: rotate(0deg); }
                                        to { transform: rotate(360deg); }
                                    }
                                    
                                    .pulsing-text {
                                        color: #45b7d1;
                                        font-size: 2em;
                                        animation: pulse 2s ease-in-out infinite;
                                    }
                                    
                                    @keyframes pulse {
                                        0%, 100% { opacity: 1; transform: scale(1); }
                                        50% { opacity: 0.7; transform: scale(1.05); }
                                    }
                                    
                                    .sliding-text {
                                        color: #96ceb4;
                                        font-size: 1.2em;
                                        animation: slideIn 3s ease-out;
                                    }
                                    
                                    @keyframes slideIn {
                                        from { transform: translateX(-100px); opacity: 0; }
                                        to { transform: translateX(0); opacity: 1; }
                                    }
                                </style>
                            </head>
                            <body>
                                <div class="container">
                                    <h1 class="pulsing-text">CSS Animations</h1>
                                    <p class="sliding-text">Watch these elements come to life!</p>
                                    
                                    <div class="bouncing-ball"></div>
                                    <p>Bouncing Ball</p>
                                    
                                    <div class="rotating-square"></div>
                                    <p>Rotating Square</p>
                                    
                                    <p>The background also has a shifting gradient animation!</p>
                                </div>
                            </body>
                            </html>`
            };
            
        editor.value = examples[type];
        updatePreview();
        updateLineNumbers();
        }

        // Event listeners
        editor.addEventListener('input', () => {
            updatePreview();
            updateLineNumbers();
        });

        editor.addEventListener('scroll', () => {
            lineNumbers.scrollTop = editor.scrollTop;
        });

        // Initialize
        updatePreview();
        updateLineNumbers();

        // Auto-resize textarea
        function autoResize() {
            editor.style.height = 'auto';
            editor.style.height = editor.scrollHeight + 'px';
        }

        // Keyboard shortcuts
        editor.addEventListener('keydown', (e) => {
            // Tab key for indentation
            if (e.key === 'Tab') {
                e.preventDefault();
                const start = editor.selectionStart;
                const end = editor.selectionEnd;
                editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);
                editor.selectionStart = editor.selectionEnd = start + 2;
                updatePreview();
                updateLineNumbers();
            }
            
            // Ctrl+S to download
            if (e.ctrlKey && e.key === 's') {
                e.preventDefault();
                downloadHTML();
            }
        });