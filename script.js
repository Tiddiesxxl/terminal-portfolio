// Terminal Portfolio - jQuery Terminal Implementation

$(document).ready(function() {
    // Initialize the terminal application
    const terminalApp = new TerminalPortfolio();
    terminalApp.init();
});

class TerminalPortfolio {
    constructor() {
        this.terminal = null;
        this.isFullscreen = false;
        this.commands = this.initCommands();
        this.currentPath = '~/portfolio';
        this.username = 'ayub';
        this.hostname = 'ayubxxl';
        this.fileSystem = this.initFileSystem();
        this.themes = this.initThemes();
        this.currentTheme = 'japanese';
        this.commandHistory = [];
        this.todoList = [];
        this.notes = {};
        this.gameState = {};
        this.timers = {};
        this.animeDatabase = this.initAnimeDatabase();
        this.watchlist = [];
        this.watchHistory = [];
    }
    
    initAnimeDatabase() {
        return {
            popular: [
                {
                    id: 1,
                    title: "Attack on Titan",
                    japanese: "Shingeki no Kyojin",
                    genre: ["Action", "Drama", "Fantasy"],
                    rating: 9.0,
                    episodes: 75,
                    status: "Completed",
                    year: 2013,
                    studio: "Mappa",
                    description: "Humanity fights for survival against giant humanoid Titans.",
                    streamUrl: "https://example-anime-stream.com/aot",
                    thumbnail: "🏰"
                },
                {
                    id: 2,
                    title: "Demon Slayer",
                    japanese: "Kimetsu no Yaiba",
                    genre: ["Action", "Supernatural", "Historical"],
                    rating: 8.7,
                    episodes: 32,
                    status: "Ongoing",
                    year: 2019,
                    studio: "Ufotable",
                    description: "A young boy becomes a demon slayer to save his sister.",
                    streamUrl: "https://example-anime-stream.com/demon-slayer",
                    thumbnail: "⚔️"
                },
                {
                    id: 3,
                    title: "Your Name",
                    japanese: "Kimi no Na wa",
                    genre: ["Romance", "Drama", "Supernatural"],
                    rating: 8.4,
                    episodes: 1,
                    status: "Movie",
                    year: 2016,
                    studio: "CoMix Wave Films",
                    description: "Two teenagers share a profound, magical connection.",
                    streamUrl: "https://example-anime-stream.com/your-name",
                    thumbnail: "🌟"
                },
                {
                    id: 4,
                    title: "Spirited Away",
                    japanese: "Sen to Chihiro no Kamikakushi",
                    genre: ["Adventure", "Family", "Fantasy"],
                    rating: 9.3,
                    episodes: 1,
                    status: "Movie",
                    year: 2001,
                    studio: "Studio Ghibli",
                    description: "A girl enters a world ruled by gods and witches.",
                    streamUrl: "https://example-anime-stream.com/spirited-away",
                    thumbnail: "🐉"
                },
                {
                    id: 5,
                    title: "Death Note",
                    japanese: "Death Note",
                    genre: ["Thriller", "Supernatural", "Psychological"],
                    rating: 9.0,
                    episodes: 37,
                    status: "Completed",
                    year: 2006,
                    studio: "Madhouse",
                    description: "A student gains the power to kill with a supernatural notebook.",
                    streamUrl: "https://example-anime-stream.com/death-note",
                    thumbnail: "📓"
                },
                {
                    id: 6,
                    title: "One Piece",
                    japanese: "One Piece",
                    genre: ["Adventure", "Comedy", "Action"],
                    rating: 8.9,
                    episodes: 1000,
                    status: "Ongoing",
                    year: 1999,
                    studio: "Toei Animation",
                    description: "Pirates search for the ultimate treasure, One Piece.",
                    streamUrl: "https://example-anime-stream.com/one-piece",
                    thumbnail: "🏴‍☠️"
                },
                {
                    id: 7,
                    title: "Naruto",
                    japanese: "Naruto",
                    genre: ["Action", "Adventure", "Martial Arts"],
                    rating: 8.4,
                    episodes: 720,
                    status: "Completed",
                    year: 2002,
                    studio: "Pierrot",
                    description: "A young ninja seeks recognition and dreams of becoming Hokage.",
                    streamUrl: "https://example-anime-stream.com/naruto",
                    thumbnail: "🍥"
                },
                {
                    id: 8,
                    title: "My Hero Academia",
                    japanese: "Boku no Hero Academia",
                    genre: ["Action", "School", "Superhero"],
                    rating: 8.6,
                    episodes: 138,
                    status: "Ongoing",
                    year: 2016,
                    studio: "Bones",
                    description: "A boy without superpowers dreams of becoming a hero.",
                    streamUrl: "https://example-anime-stream.com/mha",
                    thumbnail: "💪"
                }
            ],
            recent: [
                {
                    id: 9,
                    title: "Jujutsu Kaisen",
                    japanese: "Jujutsu Kaisen",
                    genre: ["Action", "School", "Supernatural"],
                    rating: 8.8,
                    episodes: 24,
                    status: "Ongoing",
                    year: 2020,
                    studio: "Mappa",
                    description: "Students battle cursed spirits in modern Japan.",
                    streamUrl: "https://example-anime-stream.com/jjk",
                    thumbnail: "👻"
                },
                {
                    id: 10,
                    title: "Chainsaw Man",
                    japanese: "Chainsaw Man",
                    genre: ["Action", "Horror", "Supernatural"],
                    rating: 8.5,
                    episodes: 12,
                    status: "Ongoing",
                    year: 2022,
                    studio: "Mappa",
                    description: "A young man merges with a chainsaw devil.",
                    streamUrl: "https://example-anime-stream.com/chainsaw-man",
                    thumbnail: "🪚"
                }
            ]
        };
    }

    init() {
        this.initTerminal();
        this.initEventListeners();
        this.initSystemStats();
        this.initClock();
        this.showWelcomeMessage();
    }

    initFileSystem() {
        return {
            '~': {
                type: 'directory',
                contents: {
                    'portfolio': {
                        type: 'directory',
                        contents: {
                            'about.txt': {
                                type: 'file',
                                content: 'AYUB MAKANY - Computer Science Professional\n\nAs a dedicated computer enthusiast, I recently completed my studies at CUEA, where I honed my skills in programming, cybersecurity, and IT. My passion for technology drives me to constantly explore new advancements, tackle complex problems, and develop innovative solutions.\n\nWhether it is coding, securing systems, or optimizing IT infrastructure, I thrive on the challenge of making technology more efficient and secure.\n\nEducation:\n- Bachelor of Science in Computer Science (CUEA, 2023-2025)\n- Diploma in ICT (Eldoret National Polytechnic, 2019-2022)\n\nExperience:\n- Attaché at Rivatex, Eldoret (Jan-Mar 2022)\n- System maintenance, network management, cybersecurity',
                                size: '2.8K'
                            },
                            'skills.json': {
                                type: 'file',
                                content: '{\n  "programming": ["JavaScript", "Python", "PHP", "HTML/CSS", "Java", "C++", "SQL"],\n  "web_development": ["Frontend Development", "Backend Development", "Full-Stack", "Responsive Design", "E-commerce"],\n  "cybersecurity": ["Ethical Hacking", "Penetration Testing", "Network Security", "Vulnerability Assessment"],\n  "systems": ["Linux Administration", "Network Management", "Database Administration", "Cloud Computing"],\n  "frameworks": ["React.js", "Node.js", "Express.js", "Bootstrap", "jQuery", "Laravel"],\n  "tools": ["Git/GitHub", "VS Code", "Wireshark", "Nmap", "Docker", "Postman", "MySQL"]\n}',
                                size: '2.8K'
                            },
                            'contact.md': {
                                type: 'file',
                                content: '# Contact Information\n\n👤 **Name:** Ayub Makany\n📧 **Email:** makanyayub@gmail.com\n📱 **Phone:** 01 11355038\n🌐 **Website:** Ayubxxl.site\n📍 **Location:** Kenya\n\n## Professional Profile\nComputer Science student at CUEA with expertise in:\n- Programming & Software Development\n- Cybersecurity & Ethical Hacking\n- IT Systems Management\n- Web Development & Scripting\n\n## Interests\n- Coding & Software Development\n- Cybersecurity Research\n- IT Systems Management\n- Tech Blogging & Learning\n- Open-Source Contributions',
                                size: '1.2K'
                            },
                            'resume.pdf': {
                                type: 'file',
                                content: 'AYUB MAKANY - RESUME\n\nThis is a binary file (PDF) and cannot be displayed in terminal.\nDownload link: https://Ayubxxl.site/resume.pdf\n\nQuick Summary:\n- Computer Science Student (CUEA)\n- Cybersecurity & IT Specialist\n- Programming Enthusiast\n- Former Attaché at Rivatex, Eldoret\n\nFor full resume, visit: Ayubxxl.site',
                                size: '285K'
                            },
                            'projects': {
                                type: 'directory',
                                contents: {
                                    'cybersecurity-tools': {
                                        type: 'directory',
                                        contents: {
                                            'README.md': {
                                                type: 'file',
                                                content: '# Cybersecurity Tools Collection\n\nA collection of custom cybersecurity and penetration testing tools.\n\n## Features\n- Network vulnerability scanner\n- Password strength analyzer\n- System hardening scripts\n- Security audit automation\n\n## Tech Stack\n- Python, Bash scripting\n- Nmap, Wireshark integration\n- Custom security frameworks\n- Linux system administration',
                                                size: '1.4K'
                                            },
                                            'scanner.py': {
                                                type: 'file',
                                                content: '#!/usr/bin/env python3\n# Network Vulnerability Scanner\n# Author: Ayub Makany\n\nimport nmap\nimport sys\n\ndef scan_network(target):\n    nm = nmap.PortScanner()\n    result = nm.scan(target, "22-443")\n    return result\n\nif __name__ == "__main__":\n    target = sys.argv[1] if len(sys.argv) > 1 else "127.0.0.1"\n    print(f"Scanning {target}...")\n    scan_network(target)',
                                                size: '0.5K'
                                            }
                                        }
                                    },
                                    'terminal-portfolio': {
                                        type: 'directory',
                                        contents: {
                                            'README.md': {
                                                type: 'file',
                                                content: '# Interactive Terminal Portfolio\n\nAn anime-inspired terminal interface portfolio with advanced features.\n\n## Features\n- Full file system simulation\n- AI-powered assistant\n- Interactive games and tools\n- Live API integrations\n- Multiple theme support\n- Educational content\n\n## Tech Stack\n- Vanilla JavaScript, jQuery Terminal\n- Japanese landscape color palette\n- Responsive design, Mobile-optimized\n- Advanced animations and effects',
                                                size: '1.6K'
                                            },
                                            'script.js': {
                                                type: 'file',
                                                content: '// Interactive Terminal Portfolio\n// Author: Ayub Makany\n// Features: AI assistant, file system, games, productivity tools\n\nclass TerminalPortfolio {\n    constructor() {\n        this.terminal = null;\n        this.commands = this.initCommands();\n        // ... implementation details\n    }\n}',
                                                size: '2.1K'
                                            }
                                        }
                                    },
                                    'system-admin-scripts': {
                                        type: 'directory',
                                        contents: {
                                            'README.md': {
                                                type: 'file',
                                                content: '# System Administration Scripts\n\nAutomation scripts for Linux system administration and maintenance.\n\n## Features\n- Automated backup solutions\n- System monitoring scripts\n- User management automation\n- Performance optimization tools\n- Security hardening scripts\n\n## Tech Stack\n- Bash scripting, Python automation\n- Linux system administration\n- Cron job scheduling\n- Log analysis and monitoring',
                                                size: '1.1K'
                                            },
                                            'backup.sh': {
                                                type: 'file',
                                                content: '#!/bin/bash\n# Automated Backup Script\n# Author: Ayub Makany\n\nBACKUP_DIR="/backup/$(date +%Y%m%d)"\nSOURCE_DIRS="/home /etc /var/www"\n\nmkdir -p $BACKUP_DIR\n\nfor dir in $SOURCE_DIRS; do\n    if [ -d "$dir" ]; then\n        tar -czf "$BACKUP_DIR/$(basename $dir).tar.gz" "$dir"\n        echo "Backed up $dir"\n    fi\ndone\n\necho "Backup completed: $BACKUP_DIR"',
                                                size: '0.7K'
                                            }
                                        }
                                    }
                                }
                            },
                            'anime': {
                                type: 'directory',
                                contents: {
                                    'favorites.txt': {
                                        type: 'file',
                                        content: 'My Favorite Anime:\n\n1. Attack on Titan\n2. Demon Slayer\n3. Your Name\n4. Spirited Away\n5. Death Note\n6. One Piece\n7. Naruto\n8. Studio Ghibli Collection',
                                        size: '0.5K'
                                    },
                                    'quotes.txt': {
                                        type: 'file',
                                        content: '"The world is cruel, but also beautiful." - Attack on Titan\n"I\'ll take a potato chip... and eat it!" - Death Note\n"Believe it!" - Naruto\n"I want to be the very best!" - Pokemon',
                                        size: '0.3K'
                                    }
                                }
                            },
                            '.secrets': {
                                type: 'directory',
                                contents: {
                                    'easter_eggs.txt': {
                                        type: 'file',
                                        content: 'You found the secret directory! 🎉\n\nHidden commands to try:\n- konami (enter the konami code)\n- hack (hacker mode)\n- love (spread the love)\n- 42 (answer to everything)',
                                        size: '0.2K'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }

    initThemes() {
        return {
            japanese: {
                name: 'Japanese Landscape',
                colors: {
                    primary: '#2A4A5C',
                    secondary: '#87CEEB',
                    accent: '#D4553D',
                    success: '#4A7C59',
                    warning: '#DAA520'
                }
            },
            cyberpunk: {
                name: 'Cyberpunk Neon',
                colors: {
                    primary: '#0A0A0F',
                    secondary: '#00D4FF',
                    accent: '#FF0080',
                    success: '#00FF88',
                    warning: '#FFD700'
                }
            },
            sakura: {
                name: 'Cherry Blossom',
                colors: {
                    primary: '#2D1B2E',
                    secondary: '#FFB7C5',
                    accent: '#FF69B4',
                    success: '#98FB98',
                    warning: '#FFA500'
                }
            },
            matrix: {
                name: 'Matrix Green',
                colors: {
                    primary: '#000000',
                    secondary: '#00FF00',
                    accent: '#008000',
                    success: '#00FF00',
                    warning: '#FFFF00'
                }
            },
            retro: {
                name: 'Retro Wave',
                colors: {
                    primary: '#1a1a2e',
                    secondary: '#16213e',
                    accent: '#e94560',
                    success: '#0f3460',
                    warning: '#f39c12'
                }
            }
        };
    }

    initCommands() {
        return {
            // Core Navigation
            help: {
                description: 'Show available commands',
                usage: 'help [command]',
                action: (args) => this.showHelp(args)
            },
            home: {
                description: 'Display welcome message and introduction',
                usage: 'home',
                action: () => this.showHome()
            },
            about: {
                description: 'Show information about me',
                usage: 'about',
                action: () => this.showAbout()
            },
            skills: {
                description: 'Display technical skills and proficiency',
                usage: 'skills [category]',
                action: (args) => this.showSkills(args)
            },
            projects: {
                description: 'List and describe my projects',
                usage: 'projects [project_name]',
                action: (args) => this.showProjects(args)
            },
            contact: {
                description: 'Show contact information and social links',
                usage: 'contact',
                action: () => this.showContact()
            },
            
            // File System Simulation
            ls: {
                description: 'List directory contents',
                usage: 'ls [options] [path]',
                action: (args) => this.listDirectory(args)
            },
            cd: {
                description: 'Change directory',
                usage: 'cd <path>',
                action: (args) => this.changeDirectory(args)
            },
            cat: {
                description: 'Display file contents',
                usage: 'cat <filename>',
                action: (args) => this.showFile(args)
            },
            tree: {
                description: 'Display directory structure',
                usage: 'tree [path]',
                action: (args) => this.showTree(args)
            },
            find: {
                description: 'Search for files',
                usage: 'find <pattern>',
                action: (args) => this.findFiles(args)
            },
            mkdir: {
                description: 'Create directory',
                usage: 'mkdir <dirname>',
                action: (args) => this.makeDirectory(args)
            },
            
            // System Commands
            pwd: {
                description: 'Print working directory',
                usage: 'pwd',
                action: () => this.printWorkingDirectory()
            },
            whoami: {
                description: 'Display current user',
                usage: 'whoami',
                action: () => this.showCurrentUser()
            },
            date: {
                description: 'Display current date and time',
                usage: 'date',
                action: () => this.showDate()
            },
            clear: {
                description: 'Clear the terminal screen',
                usage: 'clear',
                action: () => this.terminal.clear()
            },
            echo: {
                description: 'Display text',
                usage: 'echo <text>',
                action: (args) => this.echo(args)
            },
            history: {
                description: 'Show command history',
                usage: 'history',
                action: () => this.showHistory()
            },
            
            // Theme & Visual
            theme: {
                description: 'Change terminal theme',
                usage: 'theme [theme_name]',
                action: (args) => this.changeTheme(args)
            },
            neofetch: {
                description: 'Display system information with ASCII art',
                usage: 'neofetch',
                action: () => this.showNeofetch()
            },
            ascii: {
                description: 'Display ASCII art gallery',
                usage: 'ascii [character]',
                action: (args) => this.showAsciiArt(args)
            },
            
            // Games & Fun
            snake: {
                description: 'Play Snake game',
                usage: 'snake',
                action: () => this.playSnake()
            },
            guess: {
                description: 'Number guessing game',
                usage: 'guess',
                action: () => this.playGuessGame()
            },
            matrix: {
                description: 'Enter the matrix effect',
                usage: 'matrix',
                action: () => this.matrixEffect()
            },
            joke: {
                description: 'Tell a random joke',
                usage: 'joke',
                action: () => this.tellJoke()
            },
            fortune: {
                description: 'Display a fortune',
                usage: 'fortune',
                action: () => this.showFortune()
            },
            donut: {
                description: '3D spinning ASCII donut animation',
                usage: 'donut',
                action: () => this.spinningDonut()
            },
            
            // API & Live Data (Phase 2)
            weather: {
                description: 'Get weather information',
                usage: 'weather [city]',
                action: (args) => this.getWeather(args)
            },
            crypto: {
                description: 'Get cryptocurrency prices',
                usage: 'crypto [symbol]',
                action: (args) => this.getCrypto(args)
            },
            github: {
                description: 'Show GitHub repository information',
                usage: 'github [username/repo]',
                action: (args) => this.getGithubInfo(args)
            },
            news: {
                description: 'Get latest news',
                usage: 'news [category]',
                action: (args) => this.getNews(args)
            },
            
            // Anime Features
            waifu: {
                description: 'Random anime character',
                usage: 'waifu',
                action: () => this.showWaifu()
            },
            quote: {
                description: 'Anime quote of the day',
                usage: 'quote',
                action: () => this.showAnimeQuote()
            },
            japanese: {
                description: 'Learn Japanese words',
                usage: 'japanese [word]',
                action: (args) => this.learnJapanese(args)
            },
            
            // Anime Database Features
            anime: {
                description: 'Browse anime database with real API data',
                usage: 'anime [search|popular|recent|info] [title|id]',
                action: (args) => this.animeStreaming(args)
            },
            mylist: {
                description: 'Manage your anime watchlist',
                usage: 'mylist [add|remove|show] [anime-title]',
                action: (args) => this.manageWatchlist(args)
            },
            
            // Productivity Tools
            todo: {
                description: 'Todo list manager',
                usage: 'todo [add|list|done] [task]',
                action: (args) => this.manageTodo(args)
            },
            timer: {
                description: 'Start a timer',
                usage: 'timer <duration>',
                action: (args) => this.startTimer(args)
            },
            note: {
                description: 'Note taking system',
                usage: 'note [save|list|read] [content]',
                action: (args) => this.manageNotes(args)
            },
            
            // AI & Advanced (Phase 3)
            ai: {
                description: 'Chat with AI assistant',
                usage: 'ai <message>',
                action: (args) => this.chatWithAI(args)
            },
            explain: {
                description: 'Explain code or concepts',
                usage: 'explain <topic>',
                action: (args) => this.explainConcept(args)
            },
            interview: {
                description: 'Practice coding interviews',
                usage: 'interview [start|question|hint]',
                action: (args) => this.practiceInterview(args)
            },
            
            // GitHub Integration
            sync: {
                description: 'Sync projects with GitHub',
                usage: 'sync [github|projects]',
                action: (args) => this.syncWithGitHub(args)
            }
        };
    }

    initTerminal() {
        // Detect mobile for terminal configuration
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        this.terminal = $('#terminal').terminal(
            (command, term) => {
                const args = command.split(' ');
                const cmd = args[0].toLowerCase();
                const cmdArgs = args.slice(1);

                if (this.commands[cmd]) {
                    this.commands[cmd].action(cmdArgs);
                } else if (cmd === '') {
                    // Do nothing for empty command
                } else {
                    term.echo(`[[;#FF6B6B;]Command not found: ${cmd}]`);
                    term.echo(`[[;#8B949E;]Type 'help' for available commands]`);
                }
                
                // Ensure terminal stays focused after command execution
                setTimeout(() => {
                    term.focus();
                }, 50);
            },
            {
                greetings: false,
                prompt: () => `[[;#4A7C59;]${this.username}@${this.hostname}]:[[;#87CEEB;]${this.currentPath}]$ `,
                name: 'terminal_portfolio',
                height: '100%',
                scrollOnEcho: true,
                completion: Object.keys(this.commands),
                wrap: isMobile,
                checkArity: false,
                exit: false,
                clear: false,
                enabled: true,
                maskChar: false,
                keypress: (e) => {
                    // Optimize for mobile input
                    if (isMobile && e.which === 13) { // Enter key
                        setTimeout(() => {
                            this.terminal.scroll_to_bottom();
                        }, 100);
                    }
                }
            }
        );
        
        // Auto-focus terminal on page load
        setTimeout(() => {
            this.terminal.focus();
            if (isMobile) {
                // Ensure mobile keyboard doesn't interfere
                this.terminal.scroll_to_bottom();
            }
        }, 500);
    }

    initEventListeners() {
        // Navigation command buttons with improved mobile support
        $('.nav-cmd').on('click touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const command = $(e.currentTarget).data('command');
            this.terminal.exec(command);
            // Ensure terminal stays focused after command execution
            setTimeout(() => {
                this.terminal.focus();
            }, 100);
        });

        // Prevent double-tap zoom on navigation buttons
        $('.nav-cmd').on('touchstart', (e) => {
            e.preventDefault();
        });

        // Keyboard shortcuts for terminal control
        $(document).on('keydown', (e) => {
            if (e.ctrlKey && e.key === 'l') {
                e.preventDefault();
                this.terminal.clear();
            }
        });

        // Mobile-specific optimizations
        this.initMobileOptimizations();
    }
    
    initMobileOptimizations() {
        // Detect mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Add mobile class to body
            $('body').addClass('mobile-device');
            
            // Optimize terminal for mobile
            this.terminal.option('scrollOnEcho', true);
            this.terminal.option('wrap', true);
            
            // Prevent zoom on double tap
            let lastTouchEnd = 0;
            $(document).on('touchend', (e) => {
                const now = (new Date()).getTime();
                if (now - lastTouchEnd <= 300) {
                    e.preventDefault();
                }
                lastTouchEnd = now;
            });
            
            // Improve touch scrolling
            $('.terminal-container').css({
                '-webkit-overflow-scrolling': 'touch',
                'overflow': 'auto'
            });
            
            // Auto-focus terminal on touch
            $('.terminal-container').on('touchstart', () => {
                setTimeout(() => {
                    this.terminal.focus();
                }, 100);
            });
        }
        
        // Handle orientation changes
        $(window).on('orientationchange resize', () => {
            setTimeout(() => {
                this.terminal.resize();
                this.terminal.focus();
            }, 300);
        });
    }

    initSystemStats() {
        // Simulate system stats
        setInterval(() => {
            const cpu = Math.floor(Math.random() * 30) + 10;
            const ram = Math.floor(Math.random() * 40) + 20;
            
            $('#cpu-usage').text(`${cpu}%`);
            $('#ram-usage').text(`${ram}%`);
        }, 2000);
    }

    initClock() {
        const updateClock = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            });
            $('.system-time').text(timeString);
        };
        
        updateClock();
        setInterval(updateClock, 1000);
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.terminal.echo('[[;#87CEEB;]Initializing terminal interface...]');
            setTimeout(() => {
                this.terminal.echo('[[;#4A7C59;]✓ Connection established]');
                setTimeout(() => {
                    this.terminal.echo('[[;#C9E7F0;]Welcome to my interactive portfolio terminal!]');
                    this.terminal.echo('[[;#C9E7F0;]Type \'help\' to see available commands or click the navigation buttons above.]');
                    this.terminal.echo('[[;#DAA520;]🎌 NEW: Anime streaming now available! Try "anime" command]');
                    this.terminal.echo('');
                    // Ensure terminal is focused after welcome message
                    this.terminal.focus();
                }, 500);
            }, 300);
        }, 500);
    }

    showHelp(args) {
        if (args.length > 0) {
            const cmd = args[0].toLowerCase();
            if (this.commands[cmd]) {
                this.terminal.echo(`[[;#00D4FF;]${cmd}] - ${this.commands[cmd].description}`);
                this.terminal.echo(`[[;#8B949E;]Usage: ${this.commands[cmd].usage}]`);
            } else {
                this.terminal.echo(`[[;#FF6B6B;]Command '${cmd}' not found]`);
            }
        } else {
            this.terminal.echo('[[;#00D4FF;]Available Commands:]');
            this.terminal.echo('');
            
            Object.entries(this.commands).forEach(([cmd, info]) => {
                this.terminal.echo(`  [[;#00FF88;]${cmd.padEnd(12)}] - ${info.description}`);
            });
            
            this.terminal.echo('');
            this.terminal.echo('[[;#8B949E;]Use \'help <command>\' for detailed usage information]');
            this.terminal.echo('[[;#8B949E;]Pro tip: Use Tab for command completion!]');
        }
    }

    showHome() {
        // Display ASCII art line by line to avoid formatting issues
        const screenWidth = window.innerWidth;
        
        this.terminal.echo('');
        
        if (screenWidth < 480) {
            // Mobile - Simple text logo
            this.terminal.echo('[[;#87CEEB;]    ╔═══╗ ╔╗ ╔╗ ╔╗ ╔╗ ╔══╗]');
            this.terminal.echo('[[;#87CEEB;]    ║╔═╗║ ╚╗╔╝ ║║ ║║ ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]    ║╚═╝║  ╚╝  ║║ ║║ ║╚╝║]');
            this.terminal.echo('[[;#87CEEB;]    ║╔═╗║  ╔╗  ║╚═╝║ ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]    ╚╝ ╚╝  ╚╝  ╚═══╝ ╚══╝]');
        } else if (screenWidth < 768) {
            // Tablet - Medium
            this.terminal.echo('[[;#87CEEB;]     ╔═══╗  ╔╗ ╔╗  ╔╗ ╔╗  ╔══╗]');
            this.terminal.echo('[[;#87CEEB;]     ║╔═╗║  ╚╗╔╝  ║║ ║║  ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]     ║╚═╝║   ╚╝   ║║ ║║  ║╚╝║]');
            this.terminal.echo('[[;#87CEEB;]     ║╔═╗║   ╔╗   ║╚═╝║  ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]     ╚╝ ╚╝   ╚╝   ╚═══╝  ╚══╝]');
        } else {
            // Desktop - Full size
            this.terminal.echo('[[;#87CEEB;]      ╔═══╗   ╔╗ ╔╗   ╔╗ ╔╗   ╔══╗]');
            this.terminal.echo('[[;#87CEEB;]      ║╔═╗║   ╚╗╔╝   ║║ ║║   ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]      ║╚═╝║    ╚╝    ║║ ║║   ║╚╝║]');
            this.terminal.echo('[[;#87CEEB;]      ║╔═╗║    ╔╗    ║╚═╝║   ║╔╗║]');
            this.terminal.echo('[[;#87CEEB;]      ╚╝ ╚╝    ╚╝    ╚═══╝   ╚══╝]');
        }
        
        this.terminal.echo('');
        this.terminal.echo('[[;#D4553D;]🚀 Welcome to Ayub\'s Interactive Terminal Portfolio! 🚀]');
        this.terminal.echo('');
        this.terminal.echo('[[;#C9E7F0;]Computer Science student specializing in cybersecurity and]');
        this.terminal.echo('[[;#C9E7F0;]full-stack development. This terminal interface showcases]');
        this.terminal.echo('[[;#C9E7F0;]my work in an interactive, anime-inspired environment.]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]📋 Quick Navigation:]');
        this.terminal.echo('  • [[;#87CEEB;]about]    - Learn more about me');
        this.terminal.echo('  • [[;#87CEEB;]skills]   - View my technical skills');
        this.terminal.echo('  • [[;#87CEEB;]projects] - Explore my GitHub projects');
        this.terminal.echo('  • [[;#87CEEB;]contact]  - Get in touch');
        this.terminal.echo('  • [[;#87CEEB;]games]    - Try donut, snake, or other fun commands');
        this.terminal.echo('  • [[;#87CEEB;]help]     - See all available commands');
        this.terminal.echo('');
        this.terminal.echo('[[;#DAA520;]💡 Tip: Click the navigation buttons above or type commands directly!]');
        this.terminal.echo('');
    }

    showAbout() {
        this.terminal.echo('[[;#87CEEB;]About Ayub Makany]');
        this.terminal.echo('[[;#C9E7F0;]' + '='.repeat(50) + ']');
        this.terminal.echo('');
        this.terminal.echo('[[;#C9E7F0;]Name:] [[;#87CEEB;]Ayub Makany]');
        this.terminal.echo('[[;#C9E7F0;]Role:] [[;#87CEEB;]Computer Science Student & Cybersecurity Enthusiast]');
        this.terminal.echo('[[;#C9E7F0;]Education:] [[;#87CEEB;]BSc Computer Science (CUEA, 2023-2025)]');
        this.terminal.echo('[[;#C9E7F0;]Location:] [[;#87CEEB;]Kenya]');
        this.terminal.echo('[[;#C9E7F0;]Website:] [[;#87CEEB;]Ayubxxl.site]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]Professional Background:]');
        this.terminal.echo('[[;#C9E7F0;]As a dedicated computer enthusiast, I recently completed my studies]');
        this.terminal.echo('[[;#C9E7F0;]at CUEA, where I honed my skills in programming, cybersecurity, and IT.]');
        this.terminal.echo('[[;#C9E7F0;]My passion for technology drives me to constantly explore new]');
        this.terminal.echo('[[;#C9E7F0;]advancements, tackle complex problems, and develop innovative solutions.]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]Core Interests:]');
        this.terminal.echo('  • [[;#D4553D;]Cybersecurity & Ethical Hacking] - Securing digital systems');
        this.terminal.echo('  • [[;#D4553D;]Programming & Software Development] - Building solutions');
        this.terminal.echo('  • [[;#D4553D;]IT Systems Management] - Optimizing infrastructure');
        this.terminal.echo('  • [[;#D4553D;]Tech Research & Learning] - Staying current with trends');
        this.terminal.echo('  • [[;#D4553D;]Open Source Contributions] - Community involvement');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]Experience:]');
        this.terminal.echo('[[;#DAA520;]• Attaché at Rivatex, Eldoret (Jan-Mar 2022)]');
        this.terminal.echo('[[;#C9E7F0;]  - System maintenance and troubleshooting]');
        this.terminal.echo('[[;#C9E7F0;]  - Network management and security]');
        this.terminal.echo('[[;#C9E7F0;]  - Database administration and automation]');
        this.terminal.echo('');
    }

    showSkills(args) {
        const skills = {
            programming: {
                'JavaScript': 88,
                'Python': 85,
                'PHP': 82,
                'HTML/CSS': 92,
                'Java': 78,
                'C++': 75,
                'SQL': 80
            },
            webdevelopment: {
                'Frontend Development': 90,
                'Backend Development': 85,
                'Full-Stack Development': 88,
                'Responsive Design': 92,
                'API Development': 82,
                'Database Design': 80,
                'E-commerce Solutions': 85
            },
            cybersecurity: {
                'Ethical Hacking': 85,
                'Penetration Testing': 80,
                'Network Security': 88,
                'System Hardening': 82,
                'Vulnerability Assessment': 85,
                'Security Auditing': 78,
                'Incident Response': 75
            },
            systems: {
                'Linux Administration': 90,
                'Windows Server': 75,
                'Network Management': 85,
                'Database Administration': 80,
                'System Monitoring': 82,
                'Cloud Computing': 70,
                'DevOps Practices': 75
            },
            tools: {
                'Git & GitHub': 90,
                'VS Code': 95,
                'Wireshark': 88,
                'Nmap': 85,
                'Docker': 72,
                'VMware': 80,
                'Postman': 85,
                'MySQL/PostgreSQL': 82
            },
            frameworks: {
                'React.js': 80,
                'Node.js': 85,
                'Express.js': 82,
                'Bootstrap': 88,
                'jQuery': 85,
                'Laravel': 75,
                'WordPress': 80
            }
        };

        if (args.length > 0) {
            const category = args[0].toLowerCase();
            if (skills[category]) {
                this.displaySkillCategory(category, skills[category]);
            } else {
                this.terminal.echo(`[[;#FF6B6B;]Category '${category}' not found]`);
                this.terminal.echo('[[;#C9E7F0;]Available categories: programming, webdevelopment, cybersecurity, systems, tools, frameworks]');
            }
        } else {
            this.terminal.echo('[[;#87CEEB;]Technical Skills & Expertise]');
            this.terminal.echo('[[;#C9E7F0;]' + '='.repeat(50) + ']');
            this.terminal.echo('');
            
            Object.entries(skills).forEach(([category, skillSet]) => {
                this.displaySkillCategory(category, skillSet);
                this.terminal.echo('');
            });
        }
    }

    displaySkillCategory(category, skillSet) {
        this.terminal.echo(`[[;#4A7C59;]${category.toUpperCase()}:]`);
        
        Object.entries(skillSet).forEach(([skill, level]) => {
            const bars = '█'.repeat(Math.floor(level / 10));
            const emptyBars = '░'.repeat(10 - Math.floor(level / 10));
            const skillBar = `[[;#87CEEB;]${bars}][[;#C9E7F0;]${emptyBars}]`;
            
            this.terminal.echo(`  ${skill.padEnd(20)} ${skillBar} [[;#D4553D;]${level}%]`);
        });
    }

    async showProjects(args) {
        // Try to fetch real GitHub projects
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]🚀 My Projects Portfolio]');
            this.terminal.echo('[[;#C9E7F0;]' + '='.repeat(50) + ']');
            this.terminal.echo('[[;#DAA520;]Fetching projects from GitHub...]');
            
            try {
                await this.fetchGitHubProjects();
            } catch (error) {
                this.showProjectsFallback();
            }
            return;
        }
        
        // Show specific project details
        const projectKey = args[0].toLowerCase();
        await this.showSpecificProject(projectKey);
    }
    
    async fetchGitHubProjects() {
        try {
            const response = await fetch('https://api.github.com/users/Tiddiesxxl/repos?sort=updated&per_page=20');
            if (!response.ok) throw new Error('GitHub API error');
            
            const repos = await response.json();
            const featuredRepos = repos.filter(repo => 
                !repo.fork && 
                repo.size > 0 && 
                (repo.description || repo.stargazers_count > 0 || repo.language)
            ).slice(0, 8);
            
            this.terminal.echo('[[;#4A7C59;]✨ Live GitHub Projects]');
            this.terminal.echo('');
            
            featuredRepos.forEach((repo, index) => {
                const language = repo.language ? `[${repo.language}]` : '[Mixed]';
                const stars = repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count}` : '';
                const updated = new Date(repo.updated_at).toLocaleDateString();
                
                this.terminal.echo(`[[;#87CEEB;]${index + 1}. ${repo.name} ${language} ${stars}]`);
                if (repo.description) {
                    this.terminal.echo(`[[;#C9E7F0;]   ${repo.description}]`);
                }
                this.terminal.echo(`[[;#DAA520;]   Updated: ${updated} | Size: ${repo.size}KB]`);
                this.terminal.echo(`[[;#C9E7F0;]   ${repo.html_url}]`);
                this.terminal.echo('');
            });
            
            this.terminal.echo('[[;#4A7C59;]💡 Usage: projects <repo-name> for details]');
            
        } catch (error) {
            this.showProjectsFallback();
        }
    }
    
    async showSpecificProject(projectName) {
        try {
            const response = await fetch(`https://api.github.com/repos/Tiddiesxxl/${projectName}`);
            if (!response.ok) throw new Error('Repository not found');
            
            const repo = await response.json();
            
            this.terminal.echo(`[[;#87CEEB;]📁 ${repo.name}]`);
            this.terminal.echo('[[;#C9E7F0;]' + '='.repeat(repo.name.length + 10) + ']');
            this.terminal.echo('');
            if (repo.description) this.terminal.echo(`[[;#C9E7F0;]${repo.description}]`);
            this.terminal.echo('');
            this.terminal.echo(`[[;#4A7C59;]Language:] [[;#87CEEB;]${repo.language || 'Multiple'}]`);
            this.terminal.echo(`[[;#4A7C59;]Stars:] [[;#DAA520;]⭐ ${repo.stargazers_count}]`);
            this.terminal.echo(`[[;#4A7C59;]Forks:] [[;#DAA520;]🍴 ${repo.forks_count}]`);
            this.terminal.echo(`[[;#4A7C59;]Size:] [[;#C9E7F0;]${repo.size} KB]`);
            this.terminal.echo(`[[;#4A7C59;]Created:] [[;#C9E7F0;]${new Date(repo.created_at).toLocaleDateString()}]`);
            this.terminal.echo(`[[;#4A7C59;]Updated:] [[;#C9E7F0;]${new Date(repo.updated_at).toLocaleDateString()}]`);
            this.terminal.echo(`[[;#4A7C59;]URL:] [[;#87CEEB;]${repo.html_url}]`);
            
            if (repo.topics && repo.topics.length > 0) {
                this.terminal.echo(`[[;#4A7C59;]Topics:] [[;#D4553D;]${repo.topics.join(', ')}]`);
            }
            
        } catch (error) {
            this.terminal.echo(`[[;#FF6B6B;]Project '${projectName}' not found on GitHub]`);
            this.terminal.echo('[[;#C9E7F0;]Try: projects (without arguments) to see available projects]');
        }
    }
    
    showProjectsFallback() {
        const projects = {
            'cybersecurity-tools': {
                name: 'Cybersecurity Tools Collection',
                description: 'Custom security and penetration testing automation tools',
                tech: ['Python', 'Bash', 'Nmap', 'Wireshark'],
                status: 'Active Development',
                github: 'https://github.com/ayubxxl/cybersecurity-tools'
            },
            'network-scanner': {
                name: 'Network Vulnerability Scanner',
                description: 'Automated network security assessment tool',
                tech: ['Python', 'Nmap', 'Socket Programming'],
                status: 'Completed',
                github: 'https://github.com/ayubxxl/network-scanner'
            },
            'system-admin-scripts': {
                name: 'Linux Administration Scripts',
                description: 'Automation scripts for system administration tasks',
                tech: ['Bash', 'Python', 'Cron', 'Linux'],
                status: 'Ongoing',
                github: 'https://github.com/ayubxxl/system-admin-scripts'
            },
            'terminal-portfolio': {
                name: 'Interactive Terminal Portfolio',
                description: 'Anime-inspired terminal interface with advanced features',
                tech: ['JavaScript', 'jQuery Terminal', 'CSS3'],
                status: 'Completed',
                github: 'https://github.com/ayubxxl/terminal-portfolio'
            }
        };

        this.terminal.echo('[[;#4A7C59;]✨ Featured Projects (Fallback)]');
        this.terminal.echo('');
        
        Object.entries(projects).forEach(([key, project]) => {
            this.terminal.echo(`[[;#87CEEB;]📁 ${project.name}]`);
            this.terminal.echo(`[[;#C9E7F0;]   ${project.description}]`);
            this.terminal.echo(`[[;#DAA520;]   Tech: ${project.tech.join(', ')}]`);
            this.terminal.echo(`[[;#4A7C59;]   Status: ${project.status}]`);
            this.terminal.echo(`[[;#87CEEB;]   ${project.github}]`);
            this.terminal.echo('');
        });
        
        this.terminal.echo('[[;#DAA520;]💡 Note: Live GitHub data unavailable - showing fallback projects]');
        this.terminal.echo('[[;#C9E7F0;]Use \'github Tiddiesxxl\' to view GitHub profile]');
    }

    displayProject(project) {
        this.terminal.echo(`[[;#00D4FF;]${project.name}]`);
        this.terminal.echo('[[;#8B949E;]' + '='.repeat(project.name.length + 10) + ']');
        this.terminal.echo('');
        this.terminal.echo(`[[;#F0F6FC;]Description:] ${project.description}`);
        this.terminal.echo(`[[;#F0F6FC;]Status:] [[;#00FF88;]${project.status}]`);
        this.terminal.echo(`[[;#F0F6FC;]Technologies:] [[;#F472B6;]${project.tech.join(', ')}]`);
        this.terminal.echo(`[[;#F0F6FC;]GitHub:] [[;#00D4FF;]${project.github}]`);
        this.terminal.echo(`[[;#F0F6FC;]Demo:] [[;#00D4FF;]${project.demo}]`);
        this.terminal.echo('');
    }

    showContact() {
        this.terminal.echo('[[;#87CEEB;]Contact Information]');
        this.terminal.echo('[[;#C9E7F0;]' + '='.repeat(50) + ']');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]👤 Name:] [[;#87CEEB;]Ayub Makany]');
        this.terminal.echo('[[;#4A7C59;]📧 Email:] [[;#87CEEB;]makanyayub@gmail.com]');
        this.terminal.echo('[[;#4A7C59;]📱 Phone:] [[;#87CEEB;]01 11355038]');
        this.terminal.echo('[[;#4A7C59;]🌐 Website:] [[;#87CEEB;]Ayubxxl.site]');
        this.terminal.echo('[[;#4A7C59;]📍 Location:] [[;#87CEEB;]Kenya]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]Professional Focus:]');
        this.terminal.echo('[[;#C9E7F0;]Computer Science student specializing in:]');
        this.terminal.echo('  • [[;#D4553D;]Cybersecurity & Ethical Hacking]');
        this.terminal.echo('  • [[;#D4553D;]Programming & Software Development]');
        this.terminal.echo('  • [[;#D4553D;]IT Systems Management]');
        this.terminal.echo('  • [[;#D4553D;]Web Development & Scripting]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]Connect with me:]');
        this.terminal.echo('  [[;#DAA520;]Website:] [[;#87CEEB;]https://Ayubxxl.site]');
        this.terminal.echo('  [[;#DAA520;]Email:] [[;#87CEEB;]makanyayub@gmail.com]');
        this.terminal.echo('');
        this.terminal.echo('[[;#C9E7F0;]Open to collaborations, internships, and tech discussions!]');
    }

    listDirectory(args) {
        const showAll = args.includes('-la') || args.includes('-a');
        const path = args.find(arg => !arg.startsWith('-')) || this.currentPath;
        const target = this.getFileSystemItem(path);
        
        if (!target) {
            this.terminal.echo(`[[;#FF6B6B;]ls: ${path}: No such file or directory]`);
            return;
        }
        
        if (target.type !== 'directory') {
            this.terminal.echo(`[[;#87CEEB;]${path}]`);
            return;
        }
        
        const entries = Object.entries(target.contents || {});
        const visibleEntries = showAll ? entries : entries.filter(([name]) => !name.startsWith('.'));
        
        if (args.includes('-la')) {
            this.terminal.echo(`[[;#87CEEB;]total ${visibleEntries.length}]`);
            visibleEntries.forEach(([name, item]) => {
                const permissions = item.type === 'directory' ? 'drwxr-xr-x' : '-rw-r--r--';
                const size = item.size || (item.type === 'directory' ? '4096' : '1024');
                const icon = item.type === 'directory' ? '📁' : '📄';
                const color = item.type === 'directory' ? '#87CEEB' : '#C9E7F0';
                
                this.terminal.echo(`[[;${color};]${permissions} 1 rika rika ${size.padStart(8)} Dec 15 10:30 ${icon} ${name}]`);
            });
        } else {
            visibleEntries.forEach(([name, item]) => {
                const icon = item.type === 'directory' ? '📁' : '📄';
                const color = item.type === 'directory' ? '#87CEEB' : '#C9E7F0';
                const size = item.size || '-';
                this.terminal.echo(`[[;${color};]${icon} ${name.padEnd(20)} ${size.padStart(8)}]`);
            });
        }
    }

    showFile(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#FF6B6B;]cat: missing file operand]');
            return;
        }

        const filename = args[0];
        const filePath = this.resolvePath(filename);
        const file = this.getFileSystemItem(filePath);

        if (!file) {
            this.terminal.echo(`[[;#FF6B6B;]cat: ${filename}: No such file or directory]`);
            return;
        }

        if (file.type === 'directory') {
            this.terminal.echo(`[[;#FF6B6B;]cat: ${filename}: Is a directory]`);
            return;
        }

        this.terminal.echo(`[[;#87CEEB;]--- ${filename} ---]`);
        this.terminal.echo(`[[;#C9E7F0;]${file.content}]`);
    }

    printWorkingDirectory() {
        this.terminal.echo(`[[;#00D4FF;]${this.currentPath}]`);
    }

    showCurrentUser() {
        this.terminal.echo(`[[;#00D4FF;]${this.username}]`);
    }

    showDate() {
        const now = new Date();
        this.terminal.echo(`[[;#00D4FF;]${now.toString()}]`);
    }

    echo(args) {
        this.terminal.echo(`[[;#F0F6FC;]${args.join(' ')}]`);
    }

    showNeofetch() {
        const ascii = `
        [[;#00D4FF;]      ___     ]
        [[;#00D4FF;]     (.. |    ]
        [[;#00D4FF;]     (<> |    ]
        [[;#00D4FF;]    / __  \\   ]
        [[;#00D4FF;]   ( /  \\ /|  ]
        [[;#00D4FF;]  _/\\ __)/_)  ]
        [[;#00D4FF;]  \\/-____\\/   ]
        `;

        this.terminal.echo(ascii);
        this.terminal.echo('[[;#00FF88;]OS:] [[;#F0F6FC;]Terminal Portfolio v1.0]');
        this.terminal.echo('[[;#00FF88;]Host:] [[;#F0F6FC;]Interactive Terminal Interface]');
        this.terminal.echo('[[;#00FF88;]Kernel:] [[;#F0F6FC;]jQuery Terminal 2.35.3]');
        this.terminal.echo('[[;#00FF88;]Shell:] [[;#F0F6FC;]portfolio-shell]');
        this.terminal.echo('[[;#00FF88;]Theme:] [[;#F0F6FC;]Anime Cyberpunk]');
        this.terminal.echo('[[;#00FF88;]CPU:] [[;#F0F6FC;]JavaScript Engine]');
        this.terminal.echo('[[;#00FF88;]Memory:] [[;#F0F6FC;]Unlimited Creativity]');
    }

    changeTheme(args) {
        this.terminal.echo('[[;#8B949E;]Theme changing feature coming soon!]');
        this.terminal.echo('[[;#8B949E;]Available themes: cyberpunk, matrix, retro, minimal]');
    }

    // ===== PHASE 1: FILE SYSTEM SIMULATION =====
    
    changeDirectory(args) {
        if (args.length === 0) {
            this.currentPath = '~/portfolio';
            this.terminal.echo(`[[;#4A7C59;]Changed to ${this.currentPath}]`);
            return;
        }
        
        const path = args[0];
        const newPath = this.resolvePath(path);
        const target = this.getFileSystemItem(newPath);
        
        if (!target) {
            this.terminal.echo(`[[;#FF6B6B;]cd: ${path}: No such file or directory]`);
        } else if (target.type !== 'directory') {
            this.terminal.echo(`[[;#FF6B6B;]cd: ${path}: Not a directory]`);
        } else {
            this.currentPath = newPath;
            this.terminal.echo(`[[;#4A7C59;]Changed to ${this.currentPath}]`);
        }
    }
    
    showTree(args) {
        const path = args.length > 0 ? args[0] : this.currentPath;
        const target = this.getFileSystemItem(path);
        
        if (!target || target.type !== 'directory') {
            this.terminal.echo(`[[;#FF6B6B;]tree: ${path}: No such directory]`);
            return;
        }
        
        this.terminal.echo(`[[;#87CEEB;]${path}]`);
        this.displayTree(target.contents, '', true);
    }
    
    displayTree(contents, prefix, isLast) {
        const entries = Object.entries(contents);
        entries.forEach(([name, item], index) => {
            const isLastEntry = index === entries.length - 1;
            const connector = isLastEntry ? '└── ' : '├── ';
            const icon = item.type === 'directory' ? '📁' : '📄';
            
            this.terminal.echo(`[[;#C9E7F0;]${prefix}${connector}${icon} ${name}]`);
            
            if (item.type === 'directory' && item.contents) {
                const newPrefix = prefix + (isLastEntry ? '    ' : '│   ');
                this.displayTree(item.contents, newPrefix, false);
            }
        });
    }
    
    findFiles(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#FF6B6B;]find: missing search pattern]');
            return;
        }
        
        const pattern = args[0].toLowerCase();
        const results = [];
        
        this.searchFiles(this.fileSystem['~'].contents.portfolio, '~/portfolio', pattern, results);
        
        if (results.length === 0) {
            this.terminal.echo(`[[;#DAA520;]No files found matching '${pattern}']`);
        } else {
            this.terminal.echo(`[[;#87CEEB;]Found ${results.length} file(s):]`);
            results.forEach(result => {
                this.terminal.echo(`[[;#C9E7F0;]${result}]`);
            });
        }
    }
    
    searchFiles(contents, currentPath, pattern, results) {
        Object.entries(contents).forEach(([name, item]) => {
            const fullPath = `${currentPath}/${name}`;
            
            if (name.toLowerCase().includes(pattern)) {
                const icon = item.type === 'directory' ? '📁' : '📄';
                results.push(`${icon} ${fullPath}`);
            }
            
            if (item.type === 'directory' && item.contents) {
                this.searchFiles(item.contents, fullPath, pattern, results);
            }
        });
    }
    
    makeDirectory(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#FF6B6B;]mkdir: missing directory name]');
            return;
        }
        
        this.terminal.echo(`[[;#4A7C59;]Created directory: ${args[0]}]`);
        this.terminal.echo('[[;#DAA520;](Note: This is a simulation - directory not actually created)]');
    }
    
    // ===== PHASE 1: GAMES & FUN =====
    
    playSnake() {
        this.terminal.echo('[[;#87CEEB;]🐍 FUNCTIONAL SNAKE GAME 🐍]');
        this.terminal.echo('[[;#C9E7F0;]Use WASD keys to move, Q to quit]');
        this.terminal.echo('[[;#DAA520;]Click in the terminal area first to focus, then use keys]');
        this.terminal.echo('[[;#4A7C59;]✅ This is the NEW working version!]');
        this.terminal.echo('');
        
        // Initialize game state
        this.gameState.snake = {
            board: { width: 20, height: 10 },
            snake: [{ x: 10, y: 5 }, { x: 9, y: 5 }, { x: 8, y: 5 }],
            food: { x: 15, y: 3 },
            direction: { x: 1, y: 0 },
            score: 0,
            gameOver: false,
            paused: false
        };
        
        // Create game container
        const gameContainer = $('<div class="snake-game"></div>');
        const gameDisplay = $('<pre class="snake-display"></pre>');
        const scoreDisplay = $('<div class="snake-score"></div>');
        
        gameContainer.append(scoreDisplay);
        gameContainer.append(gameDisplay);
        this.terminal.echo(gameContainer);
        
        // Start game loop
        this.startSnakeGame(gameDisplay, scoreDisplay);
        
        // Set up controls
        this.setupSnakeControls();
    }
    
    startSnakeGame(gameDisplay, scoreDisplay) {
        const game = this.gameState.snake;
        
        const gameLoop = () => {
            if (game.gameOver || game.paused) return;
            
            // Move snake
            const head = { ...game.snake[0] };
            head.x += game.direction.x;
            head.y += game.direction.y;
            
            // Check wall collision
            if (head.x < 0 || head.x >= game.board.width || 
                head.y < 0 || head.y >= game.board.height) {
                this.endSnakeGame(gameDisplay, scoreDisplay);
                return;
            }
            
            // Check self collision
            if (game.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
                this.endSnakeGame(gameDisplay, scoreDisplay);
                return;
            }
            
            game.snake.unshift(head);
            
            // Check food collision
            if (head.x === game.food.x && head.y === game.food.y) {
                game.score += 10;
                this.generateSnakeFood();
            } else {
                game.snake.pop();
            }
            
            // Render game
            this.renderSnakeGame(gameDisplay, scoreDisplay);
        };
        
        // Store interval for cleanup
        game.interval = setInterval(gameLoop, 200);
    }
    
    renderSnakeGame(gameDisplay, scoreDisplay) {
        const game = this.gameState.snake;
        let board = '';
        
        // Top border
        board += '┌' + '─'.repeat(game.board.width) + '┐\n';
        
        // Game area
        for (let y = 0; y < game.board.height; y++) {
            board += '│';
            for (let x = 0; x < game.board.width; x++) {
                if (game.snake.some(segment => segment.x === x && segment.y === y)) {
                    if (x === game.snake[0].x && y === game.snake[0].y) {
                        board += '●'; // Head
                    } else {
                        board += '○'; // Body
                    }
                } else if (game.food.x === x && game.food.y === y) {
                    board += '🍎';
                } else {
                    board += ' ';
                }
            }
            board += '│\n';
        }
        
        // Bottom border
        board += '└' + '─'.repeat(game.board.width) + '┘';
        
        gameDisplay.text(board);
        gameDisplay.css('color', '#4A7C59');
        
        scoreDisplay.html(`
            <span style="color: #87CEEB;">Score: ${game.score}</span> | 
            <span style="color: #DAA520;">Length: ${game.snake.length}</span> | 
            <span style="color: #C9E7F0;">Use WASD to move, Q to quit</span>
        `);
    }
    
    generateSnakeFood() {
        const game = this.gameState.snake;
        let newFood;
        
        do {
            newFood = {
                x: Math.floor(Math.random() * game.board.width),
                y: Math.floor(Math.random() * game.board.height)
            };
        } while (game.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
        
        game.food = newFood;
    }
    
    setupSnakeControls() {
        const game = this.gameState.snake;
        
        // Remove any existing snake controls
        $(document).off('keydown.snake');
        
        $(document).on('keydown.snake', (e) => {
            if (game.gameOver) return;
            
            const key = e.key.toLowerCase();
            
            switch (key) {
                case 'w':
                case 'arrowup':
                    if (game.direction.y === 0) {
                        game.direction = { x: 0, y: -1 };
                    }
                    break;
                case 's':
                case 'arrowdown':
                    if (game.direction.y === 0) {
                        game.direction = { x: 0, y: 1 };
                    }
                    break;
                case 'a':
                case 'arrowleft':
                    if (game.direction.x === 0) {
                        game.direction = { x: -1, y: 0 };
                    }
                    break;
                case 'd':
                case 'arrowright':
                    if (game.direction.x === 0) {
                        game.direction = { x: 1, y: 0 };
                    }
                    break;
                case 'q':
                    this.endSnakeGame();
                    break;
                case ' ':
                    game.paused = !game.paused;
                    if (!game.paused && !game.gameOver) {
                        this.startSnakeGame(
                            $('.snake-display').last(),
                            $('.snake-score').last()
                        );
                    }
                    break;
            }
            
            e.preventDefault();
        });
    }
    
    endSnakeGame(gameDisplay, scoreDisplay) {
        const game = this.gameState.snake;
        game.gameOver = true;
        
        if (game.interval) {
            clearInterval(game.interval);
        }
        
        // Remove controls
        $(document).off('keydown.snake');
        
        // Show game over
        if (gameDisplay && scoreDisplay) {
            scoreDisplay.html(`
                <span style="color: #FF6B6B;">GAME OVER!</span> | 
                <span style="color: #87CEEB;">Final Score: ${game.score}</span> | 
                <span style="color: #DAA520;">Length: ${game.snake.length}</span>
            `);
        }
        
        this.terminal.echo('');
        this.terminal.echo('[[;#FF6B6B;]🐍 Game Over! 🐍]');
        this.terminal.echo(`[[;#87CEEB;]Final Score: ${game.score}]`);
        this.terminal.echo(`[[;#DAA520;]Snake Length: ${game.snake.length}]`);
        this.terminal.echo('[[;#C9E7F0;]Type \'snake\' to play again!]');
    }
    
    playGuessGame() {
        if (!this.gameState.guessGame) {
            this.gameState.guessGame = {
                number: Math.floor(Math.random() * 100) + 1,
                attempts: 0,
                active: true
            };
            
            this.terminal.echo('[[;#87CEEB;]🎯 NUMBER GUESSING GAME 🎯]');
            this.terminal.echo('[[;#C9E7F0;]I\'m thinking of a number between 1 and 100.]');
            this.terminal.echo('[[;#C9E7F0;]Type "guess <number>" to make a guess!]');
            return;
        }
        
        const game = this.gameState.guessGame;
        if (!game.active) {
            this.terminal.echo('[[;#DAA520;]Game already finished! Start a new game with "guess"]');
            return;
        }
        
        this.terminal.echo('[[;#87CEEB;]Game in progress. Type "guess <number>" to continue!]');
    }
    
    tellJoke() {
        const jokes = [
            "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            "How many programmers does it take to change a light bulb? None, that's a hardware problem! 💡",
            "Why do Java developers wear glasses? Because they can't C# ! 👓",
            "What's a programmer's favorite hangout place? Foo Bar! 🍺",
            "Why did the programmer quit his job? He didn't get arrays! 📊",
            "What do you call a programmer from Finland? Nerdic! 🇫🇮",
            "Why do programmers hate nature? It has too many bugs! 🌿🐛",
            "What's the object-oriented way to become wealthy? Inheritance! 💰"
        ];
        
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        this.terminal.echo(`[[;#F2A57D;]${joke}]`);
    }
    
    showFortune() {
        const fortunes = [
            "Your code will compile on the first try today! ✨",
            "A bug you've been hunting will reveal itself soon. 🔍",
            "Great success awaits in your next project! 🚀",
            "Today is a good day to refactor legacy code. 🔧",
            "Your pull request will be approved without changes! ✅",
            "A new technology will spark your interest this week. 💡",
            "Debugging will be swift and painless today. 🐛➡️✨",
            "Your next commit message will be perfectly descriptive! 📝"
        ];
        
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        this.terminal.echo('[[;#87CEEB;]🔮 FORTUNE COOKIE 🔮]');
        this.terminal.echo(`[[;#DAA520;]${fortune}]`);
    }
    
    spinningDonut() {
        this.terminal.echo('[[;#87CEEB;]🍩 3D SPINNING ASCII DONUT 🍩]');
        this.terminal.echo('[[;#C9E7F0;]Animation will run for 10 seconds...]');
        this.terminal.echo('');
        
        // Create a container div for the animation
        const donutContainer = $('<div class="donut-animation"></div>');
        const donutDisplay = $('<pre class="donut-frame"></pre>');
        donutContainer.append(donutDisplay);
        
        // Add to terminal
        this.terminal.echo(donutContainer);
        
        let A = 0, B = 0;
        const donutInterval = setInterval(() => {
            const b = [];
            const z = [];
            
            // Initialize arrays
            for (let i = 0; i < 1760; i++) {
                b[i] = i % 80 === 79 ? '\n' : ' ';
                z[i] = 0;
            }
            
            // Generate donut
            for (let j = 0; j < 6.28; j += 0.07) {
                for (let i = 0; i < 6.28; i += 0.02) {
                    const c = Math.sin(i);
                    const d = Math.cos(j);
                    const e = Math.sin(A);
                    const f = Math.sin(j);
                    const g = Math.cos(A);
                    const h = d + 2;
                    const D = 1 / (c * h * e + f * g + 5);
                    const l = Math.cos(i);
                    const m = Math.cos(B);
                    const n = Math.sin(B);
                    const t = c * h * g - f * e;
                    const x = Math.floor(40 + 30 * D * (l * h * m - t * n));
                    const y = Math.floor(12 + 15 * D * (l * h * n + t * m));
                    const o = Math.floor(x + 80 * y);
                    const N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
                    
                    if (y < 22 && y >= 0 && x >= 0 && x < 79 && D > z[o]) {
                        z[o] = D;
                        b[o] = '.,-~:;=!*#$@'[N > 0 ? N : 0];
                    }
                }
            }
            
            // Update the same frame instead of adding new ones
            donutDisplay.text(b.join(''));
            donutDisplay.css('color', '#4A7C59');
            
            A += 0.04;
            B += 0.02;
            
        }, 100);
        
        // Store interval for cleanup
        if (!this.gameState.donut) {
            this.gameState.donut = {};
        }
        this.gameState.donut.interval = donutInterval;
        
        // Auto-stop after 10 seconds
        setTimeout(() => {
            clearInterval(donutInterval);
            donutDisplay.css('color', '#87CEEB');
            this.terminal.echo('');
            this.terminal.echo('[[;#87CEEB;]🍩 Donut animation completed! 🍩]');
            this.terminal.echo('[[;#DAA520;]Classic demo by Andy Sloane - a masterpiece of ASCII art!]');
        }, 10000);
    }
    
    // ===== PHASE 1: ASCII ART GALLERY =====
    
    showAsciiArt(args) {
        const characters = {
            rika: `
    [[;#F472B6;]       ∩───∩     ]
    [[;#F472B6;]      (  ◕   ◕ )   ]
    [[;#F472B6;]       ∪ ─── ∪     ]
    [[;#F472B6;]     Rika-chan! ♡  ]`,
            
            cat: `
    [[;#87CEEB;]      /\\_/\\      ]
    [[;#87CEEB;]     ( o.o )     ]
    [[;#87CEEB;]      > ^ <      ]`,
            
            heart: `
    [[;#F472B6;]      ♡   ♡      ]
    [[;#F472B6;]    ♡       ♡    ]
    [[;#F472B6;]   ♡         ♡   ]
    [[;#F472B6;]    ♡       ♡    ]
    [[;#F472B6;]      ♡   ♡      ]
    [[;#F472B6;]        ♡        ]`,
            
            sakura: `
    [[;#FFB7C5;]       🌸        ]
    [[;#FFB7C5;]     🌸 🌸 🌸    ]
    [[;#FFB7C5;]   🌸   🌸   🌸  ]
    [[;#FFB7C5;]     🌸 🌸 🌸    ]
    [[;#FFB7C5;]       🌸        ]`,
            
            terminal: `
    [[;#87CEEB;]   ┌─────────────┐  ]
    [[;#87CEEB;]   │ ○ ○ ○       │  ]
    [[;#87CEEB;]   ├─────────────┤  ]
    [[;#87CEEB;]   │ $ echo hi    │  ]
    [[;#87CEEB;]   │ hi           │  ]
    [[;#87CEEB;]   │ $ █          │  ]
    [[;#87CEEB;]   └─────────────┘  ]`
        };
        
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]🎨 ASCII ART GALLERY 🎨]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Available characters:]');
            Object.keys(characters).forEach(char => {
                this.terminal.echo(`[[;#DAA520;]  • ${char}]`);
            });
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Usage: ascii <character>]');
            return;
        }
        
        const character = args[0].toLowerCase();
        if (characters[character]) {
            this.terminal.echo(characters[character]);
        } else {
            this.terminal.echo(`[[;#FF6B6B;]Character '${character}' not found in gallery]`);
            this.terminal.echo('[[;#C9E7F0;]Try: ascii (without arguments) to see available characters]');
        }
    }
    
    // ===== PHASE 1: THEME SYSTEM =====
    
    changeTheme(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]🎨 AVAILABLE THEMES 🎨]');
            this.terminal.echo('');
            Object.entries(this.themes).forEach(([key, theme]) => {
                const current = key === this.currentTheme ? ' [[;#4A7C59;](current)]' : '';
                this.terminal.echo(`[[;#DAA520;]${key}] - ${theme.name}${current}`);
            });
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Usage: theme <theme_name>]');
            return;
        }
        
        const themeName = args[0].toLowerCase();
        if (this.themes[themeName]) {
            this.currentTheme = themeName;
            this.applyTheme(this.themes[themeName]);
            this.terminal.echo(`[[;#4A7C59;]Theme changed to: ${this.themes[themeName].name}]`);
        } else {
            this.terminal.echo(`[[;#FF6B6B;]Theme '${themeName}' not found]`);
        }
    }
    
    applyTheme(theme) {
        // Apply theme colors to CSS variables
        const root = document.documentElement;
        root.style.setProperty('--theme-primary', theme.colors.primary);
        root.style.setProperty('--theme-secondary', theme.colors.secondary);
        root.style.setProperty('--theme-accent', theme.colors.accent);
        root.style.setProperty('--theme-success', theme.colors.success);
        root.style.setProperty('--theme-warning', theme.colors.warning);
        
        // Add visual feedback
        this.terminal.echo(`[[;${theme.colors.accent};]✨ Theme applied successfully! ✨]`);
    }
    
    // ===== UTILITY FUNCTIONS =====
    
    resolvePath(path) {
        if (path.startsWith('/')) {
            return path;
        } else if (path.startsWith('~/')) {
            return path;
        } else if (path === '..') {
            const parts = this.currentPath.split('/');
            parts.pop();
            return parts.join('/') || '~';
        } else if (path === '.') {
            return this.currentPath;
        } else {
            return `${this.currentPath}/${path}`;
        }
    }
    
    getFileSystemItem(path) {
        const parts = path.replace(/^~/, '').split('/').filter(p => p);
        let current = this.fileSystem['~'];
        
        for (const part of parts) {
            if (current.type === 'directory' && current.contents && current.contents[part]) {
                current = current.contents[part];
            } else {
                return null;
            }
        }
        
        return current;
    }
    
    showHistory() {
        this.terminal.echo('[[;#87CEEB;]📜 COMMAND HISTORY 📜]');
        this.terminal.echo('');
        if (this.commandHistory.length === 0) {
            this.terminal.echo('[[;#DAA520;]No commands in history yet]');
        } else {
            this.commandHistory.forEach((cmd, index) => {
                this.terminal.echo(`[[;#C9E7F0;]${index + 1}. ${cmd}]`);
            });
        }
    }

    matrixEffect() {
        this.terminal.echo('[[;#00FF88;]Entering the matrix...]');
        
        const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let lines = [];
        
        for (let i = 0; i < 10; i++) {
            let line = '';
            for (let j = 0; j < 50; j++) {
                line += matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }
            lines.push(`[[;#00FF88;]${line}]`);
        }
        
        lines.forEach((line, index) => {
            setTimeout(() => {
                this.terminal.echo(line);
            }, index * 100);
        });
        
        setTimeout(() => {
            this.terminal.echo('[[;#FF6B6B;]Connection to the matrix terminated.]');
        }, 1500);
    }

    // ===== PHASE 2: API INTEGRATIONS & LIVE DATA =====
    
    async getWeather(args) {
        const city = args.length > 0 ? args.join(' ') : 'Tokyo';
        
        this.terminal.echo(`[[;#87CEEB;]🌤️  Weather for ${city}]`);
        this.terminal.echo('[[;#DAA520;]Loading weather data...]');
        
        // Simulate API call with realistic data
        setTimeout(() => {
            const weatherData = {
                'tokyo': { temp: '22°C', condition: 'Partly Cloudy', humidity: '65%', wind: '12 km/h' },
                'san francisco': { temp: '18°C', condition: 'Foggy', humidity: '78%', wind: '8 km/h' },
                'new york': { temp: '15°C', condition: 'Rainy', humidity: '82%', wind: '15 km/h' },
                'london': { temp: '12°C', condition: 'Overcast', humidity: '88%', wind: '10 km/h' }
            };
            
            const data = weatherData[city.toLowerCase()] || { 
                temp: `${Math.floor(Math.random() * 30) + 5}°C`, 
                condition: 'Sunny', 
                humidity: `${Math.floor(Math.random() * 40) + 40}%`, 
                wind: `${Math.floor(Math.random() * 20) + 5} km/h` 
            };
            
            this.terminal.echo(`[[;#4A7C59;]Temperature: ${data.temp}]`);
            this.terminal.echo(`[[;#87CEEB;]Condition: ${data.condition}]`);
            this.terminal.echo(`[[;#C9E7F0;]Humidity: ${data.humidity}]`);
            this.terminal.echo(`[[;#DAA520;]Wind: ${data.wind}]`);
        }, 1000);
    }
    
    async getCrypto(args) {
        const symbol = args.length > 0 ? args[0].toLowerCase() : 'btc';
        
        this.terminal.echo(`[[;#87CEEB;]₿ Cryptocurrency: ${symbol.toUpperCase()}]`);
        this.terminal.echo('[[;#DAA520;]Fetching live prices...]');
        
        setTimeout(() => {
            const cryptoData = {
                'btc': { price: '$43,250', change: '+2.5%', volume: '$28.5B' },
                'eth': { price: '$2,680', change: '+1.8%', volume: '$15.2B' },
                'ada': { price: '$0.52', change: '-0.3%', volume: '$1.8B' },
                'sol': { price: '$98.50', change: '+4.2%', volume: '$3.2B' }
            };
            
            const data = cryptoData[symbol] || { 
                price: `$${(Math.random() * 1000).toFixed(2)}`, 
                change: `${(Math.random() * 10 - 5).toFixed(1)}%`, 
                volume: `$${(Math.random() * 10).toFixed(1)}B` 
            };
            
            const changeColor = data.change.startsWith('+') ? '#4A7C59' : '#FF6B6B';
            
            this.terminal.echo(`[[;#DAA520;]Price: ${data.price}]`);
            this.terminal.echo(`[[;${changeColor};]24h Change: ${data.change}]`);
            this.terminal.echo(`[[;#87CEEB;]Volume: ${data.volume}]`);
        }, 800);
    }
    
    async getGithubInfo(args) {
        const repo = args.length > 0 ? args.join('/') : 'Tiddiesxxl';
        
        this.terminal.echo(`[[;#87CEEB;]📂 GitHub Profile/Repository: ${repo}]`);
        this.terminal.echo('[[;#DAA520;]Fetching repository data...]');
        
        // Try to fetch real GitHub data
        try {
            if (repo.includes('/')) {
                // Specific repository
                await this.fetchGitHubRepo(repo);
            } else {
                // User profile
                await this.fetchGitHubProfile(repo);
            }
        } catch (error) {
            // Fallback to simulated data
            this.showGitHubFallback(repo);
        }
    }
    
    async fetchGitHubProfile(username) {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            if (!response.ok) throw new Error('User not found');
            
            const userData = await response.json();
            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
            const repos = await reposResponse.json();
            
            this.terminal.echo('[[;#4A7C59;]✨ GitHub Profile Information]');
            this.terminal.echo(`[[;#C9E7F0;]Name: ${userData.name || username}]`);
            this.terminal.echo(`[[;#C9E7F0;]Public Repos: 📁 ${userData.public_repos}]`);
            this.terminal.echo(`[[;#C9E7F0;]Followers: 👥 ${userData.followers}]`);
            this.terminal.echo(`[[;#C9E7F0;]Following: ➡️ ${userData.following}]`);
            if (userData.bio) this.terminal.echo(`[[;#DAA520;]Bio: ${userData.bio}]`);
            if (userData.location) this.terminal.echo(`[[;#C9E7F0;]Location: 📍 ${userData.location}]`);
            if (userData.blog) this.terminal.echo(`[[;#C9E7F0;]Website: 🌐 ${userData.blog}]`);
            
            this.terminal.echo('');
            this.terminal.echo('[[;#87CEEB;]📚 Recent Repositories:]');
            repos.slice(0, 5).forEach(repo => {
                const language = repo.language ? `[${repo.language}]` : '[No language]';
                const stars = repo.stargazers_count > 0 ? `⭐ ${repo.stargazers_count}` : '';
                this.terminal.echo(`[[;#C9E7F0;]📁 ${repo.name} ${language} ${stars}]`);
                if (repo.description) {
                    this.terminal.echo(`[[;#DAA520;]   ${repo.description}]`);
                }
            });
            
        } catch (error) {
            this.showGitHubFallback(username);
        }
    }
    
    async fetchGitHubRepo(repoPath) {
        try {
            const response = await fetch(`https://api.github.com/repos/${repoPath}`);
            if (!response.ok) throw new Error('Repository not found');
            
            const repo = await response.json();
            
            this.terminal.echo('[[;#4A7C59;]✨ Repository Information]');
            this.terminal.echo(`[[;#C9E7F0;]Name: ${repo.name}]`);
            this.terminal.echo(`[[;#C9E7F0;]Stars: ⭐ ${repo.stargazers_count}]`);
            this.terminal.echo(`[[;#C9E7F0;]Forks: 🍴 ${repo.forks_count}]`);
            this.terminal.echo(`[[;#C9E7F0;]Language: ${repo.language || 'Multiple'}]`);
            this.terminal.echo(`[[;#C9E7F0;]Size: ${repo.size} KB]`);
            this.terminal.echo(`[[;#C9E7F0;]Created: ${new Date(repo.created_at).toLocaleDateString()}]`);
            this.terminal.echo(`[[;#C9E7F0;]Updated: ${new Date(repo.updated_at).toLocaleDateString()}]`);
            if (repo.description) this.terminal.echo(`[[;#DAA520;]Description: ${repo.description}]`);
            this.terminal.echo(`[[;#87CEEB;]URL: ${repo.html_url}]`);
            
        } catch (error) {
            this.showGitHubFallback(repoPath);
        }
    }
    
    showGitHubFallback(identifier) {
        this.terminal.echo('[[;#4A7C59;]✨ GitHub Information (Simulated)]');
        this.terminal.echo('[[;#C9E7F0;]Profile: Ayub Makany (@Tiddiesxxl)]');
        this.terminal.echo('[[;#C9E7F0;]Public Repos: 📁 15+]');
        this.terminal.echo('[[;#C9E7F0;]Focus: Cybersecurity & System Administration]');
        this.terminal.echo('[[;#DAA520;]Bio: Computer Science student specializing in cybersecurity]');
        this.terminal.echo('[[;#C9E7F0;]Location: 📍 Kenya]');
        this.terminal.echo('[[;#C9E7F0;]Website: 🌐 Ayubxxl.site]');
        this.terminal.echo('');
        this.terminal.echo('[[;#87CEEB;]📚 Featured Projects:]');
        this.terminal.echo('[[;#C9E7F0;]📁 cybersecurity-tools [Python] - Security automation scripts]');
        this.terminal.echo('[[;#C9E7F0;]📁 network-scanner [Python] - Network vulnerability assessment]');
        this.terminal.echo('[[;#C9E7F0;]📁 system-admin-scripts [Bash] - Linux administration tools]');
        this.terminal.echo('[[;#C9E7F0;]📁 terminal-portfolio [JavaScript] - Interactive portfolio]');
        this.terminal.echo('');
        this.terminal.echo('[[;#DAA520;]Note: For live data, ensure GitHub API access]');
    }
    
    async getNews(args) {
        const category = args.length > 0 ? args[0] : 'tech';
        
        this.terminal.echo(`[[;#87CEEB;]📰 Latest ${category.toUpperCase()} News]`);
        this.terminal.echo('[[;#DAA520;]Loading headlines...]');
        
        setTimeout(() => {
            const newsData = {
                tech: [
                    'AI breakthrough in quantum computing announced',
                    'New JavaScript framework promises 50% faster builds',
                    'Major security vulnerability found in popular library',
                    'Tech giant announces $10B investment in renewable energy'
                ],
                anime: [
                    'Studio Ghibli announces new film for 2024',
                    'Attack on Titan final season breaks streaming records',
                    'Anime convention returns with record attendance',
                    'New manga adaptation gets green light for anime series'
                ]
            };
            
            const headlines = newsData[category] || newsData.tech;
            
            headlines.forEach((headline, index) => {
                this.terminal.echo(`[[;#C9E7F0;]${index + 1}. ${headline}]`);
            });
        }, 1000);
    }
    
    // ===== PHASE 2: ANIME FEATURES =====
    
    showWaifu() {
        const waifus = [
            { name: 'Mikasa Ackerman', anime: 'Attack on Titan', trait: 'Strong and loyal' },
            { name: 'Nezuko Kamado', anime: 'Demon Slayer', trait: 'Protective and kind' },
            { name: 'Zero Two', anime: 'Darling in the FranXX', trait: 'Mysterious and fierce' },
            { name: 'Rem', anime: 'Re:Zero', trait: 'Devoted and caring' },
            { name: 'Chika Fujiwara', anime: 'Kaguya-sama', trait: 'Cheerful and energetic' }
        ];
        
        const waifu = waifus[Math.floor(Math.random() * waifus.length)];
        
        this.terminal.echo('[[;#F472B6;]✨ Random Waifu ✨]');
        this.terminal.echo('');
        this.terminal.echo(`[[;#87CEEB;]Name: ${waifu.name}]`);
        this.terminal.echo(`[[;#C9E7F0;]Anime: ${waifu.anime}]`);
        this.terminal.echo(`[[;#DAA520;]Trait: ${waifu.trait}]`);
        this.terminal.echo('');
        this.terminal.echo('[[;#F472B6;]      ♡ Waifu of the day! ♡]');
    }
    
    showAnimeQuote() {
        const quotes = [
            { quote: "The world is cruel, but also beautiful.", character: "Mikasa", anime: "Attack on Titan" },
            { quote: "I'll take a potato chip... and eat it!", character: "Light", anime: "Death Note" },
            { quote: "Believe it!", character: "Naruto", anime: "Naruto" },
            { quote: "I want to be the very best!", character: "Ash", anime: "Pokemon" },
            { quote: "It's over 9000!", character: "Vegeta", anime: "Dragon Ball Z" },
            { quote: "I am going to be the Pirate King!", character: "Luffy", anime: "One Piece" }
        ];
        
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        
        this.terminal.echo('[[;#87CEEB;]💭 Anime Quote of the Day]');
        this.terminal.echo('');
        this.terminal.echo(`[[;#F472B6;]"${quote.quote}"]`);
        this.terminal.echo(`[[;#DAA520;]- ${quote.character}, ${quote.anime}]`);
    }
    
    learnJapanese(args) {
        const words = {
            'hello': { japanese: 'こんにちは', romaji: 'konnichiwa', meaning: 'Hello/Good afternoon' },
            'thank you': { japanese: 'ありがとう', romaji: 'arigatou', meaning: 'Thank you' },
            'love': { japanese: '愛', romaji: 'ai', meaning: 'Love' },
            'friend': { japanese: '友達', romaji: 'tomodachi', meaning: 'Friend' },
            'beautiful': { japanese: '美しい', romaji: 'utsukushii', meaning: 'Beautiful' },
            'anime': { japanese: 'アニメ', romaji: 'anime', meaning: 'Animation' },
            'cat': { japanese: '猫', romaji: 'neko', meaning: 'Cat' },
            'cherry blossom': { japanese: '桜', romaji: 'sakura', meaning: 'Cherry blossom' }
        };
        
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]🇯🇵 Japanese Learning 🇯🇵]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Available words:]');
            Object.keys(words).forEach(word => {
                this.terminal.echo(`[[;#DAA520;]  • ${word}]`);
            });
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Usage: japanese <word>]');
            return;
        }
        
        const word = args.join(' ').toLowerCase();
        if (words[word]) {
            const data = words[word];
            this.terminal.echo(`[[;#87CEEB;]Word: ${word}]`);
            this.terminal.echo(`[[;#F472B6;]Japanese: ${data.japanese}]`);
            this.terminal.echo(`[[;#DAA520;]Romaji: ${data.romaji}]`);
            this.terminal.echo(`[[;#C9E7F0;]Meaning: ${data.meaning}]`);
        } else {
            this.terminal.echo(`[[;#FF6B6B;]Word '${word}' not found in dictionary]`);
        }
    }
    
    // ===== PHASE 2: PRODUCTIVITY TOOLS =====
    
    manageTodo(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]📝 TODO LIST MANAGER 📝]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Commands:]');
            this.terminal.echo('[[;#DAA520;]  todo add <task>    - Add new task]');
            this.terminal.echo('[[;#DAA520;]  todo list         - Show all tasks]');
            this.terminal.echo('[[;#DAA520;]  todo done <id>    - Mark task as done]');
            return;
        }
        
        const action = args[0].toLowerCase();
        
        if (action === 'add') {
            const task = args.slice(1).join(' ');
            if (!task) {
                this.terminal.echo('[[;#FF6B6B;]Please provide a task description]');
                return;
            }
            
            this.todoList.push({ id: this.todoList.length + 1, task, done: false });
            this.terminal.echo(`[[;#4A7C59;]✅ Added task: "${task}"]`);
            
        } else if (action === 'list') {
            if (this.todoList.length === 0) {
                this.terminal.echo('[[;#DAA520;]No tasks in your todo list]');
                return;
            }
            
            this.terminal.echo('[[;#87CEEB;]📋 Your Tasks:]');
            this.todoList.forEach(item => {
                const status = item.done ? '✅' : '⏳';
                const color = item.done ? '#4A7C59' : '#C9E7F0';
                this.terminal.echo(`[[;${color};]${item.id}. ${status} ${item.task}]`);
            });
            
        } else if (action === 'done') {
            const id = parseInt(args[1]);
            const task = this.todoList.find(t => t.id === id);
            
            if (!task) {
                this.terminal.echo('[[;#FF6B6B;]Task not found]');
                return;
            }
            
            task.done = true;
            this.terminal.echo(`[[;#4A7C59;]✅ Marked task ${id} as completed!]`);
        }
    }
    
    startTimer(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#FF6B6B;]Please specify duration (e.g., "5m", "25m", "1h")]');
            return;
        }
        
        const duration = args[0];
        const minutes = this.parseDuration(duration);
        
        if (!minutes) {
            this.terminal.echo('[[;#FF6B6B;]Invalid duration format. Use: 5m, 25m, 1h, etc.]');
            return;
        }
        
        this.terminal.echo(`[[;#87CEEB;]⏰ Timer started for ${duration}]`);
        this.terminal.echo('[[;#DAA520;]Timer running in background...]');
        
        setTimeout(() => {
            this.terminal.echo('[[;#4A7C59;]🔔 Timer finished! Time\'s up!]');
        }, minutes * 60 * 1000);
    }
    
    parseDuration(duration) {
        const match = duration.match(/^(\d+)([mh])$/);
        if (!match) return null;
        
        const value = parseInt(match[1]);
        const unit = match[2];
        
        return unit === 'h' ? value * 60 : value;
    }
    
    manageNotes(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]📓 NOTES MANAGER 📓]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Commands:]');
            this.terminal.echo('[[;#DAA520;]  note save <title> <content>  - Save a note]');
            this.terminal.echo('[[;#DAA520;]  note list                   - List all notes]');
            this.terminal.echo('[[;#DAA520;]  note read <title>           - Read a note]');
            return;
        }
        
        const action = args[0].toLowerCase();
        
        if (action === 'save') {
            if (args.length < 3) {
                this.terminal.echo('[[;#FF6B6B;]Usage: note save <title> <content>]');
                return;
            }
            
            const title = args[1];
            const content = args.slice(2).join(' ');
            this.notes[title] = content;
            
            this.terminal.echo(`[[;#4A7C59;]📝 Note "${title}" saved successfully]`);
            
        } else if (action === 'list') {
            const noteList = Object.keys(this.notes);
            if (noteList.length === 0) {
                this.terminal.echo('[[;#DAA520;]No notes saved yet]');
                return;
            }
            
            this.terminal.echo('[[;#87CEEB;]📚 Your Notes:]');
            noteList.forEach((title, index) => {
                this.terminal.echo(`[[;#C9E7F0;]${index + 1}. ${title}]`);
            });
            
        } else if (action === 'read') {
            const title = args[1];
            if (!title || !this.notes[title]) {
                this.terminal.echo('[[;#FF6B6B;]Note not found]');
                return;
            }
            
            this.terminal.echo(`[[;#87CEEB;]📖 Note: ${title}]`);
            this.terminal.echo(`[[;#C9E7F0;]${this.notes[title]}]`);
        }
    }
    
    // ===== PHASE 3: AI & ADVANCED FEATURES =====
    
    async chatWithAI(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]🤖 AI ASSISTANT 🤖]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Hello! I\'m Rika\'s AI assistant. How can I help you today?]');
            this.terminal.echo('[[;#DAA520;]Usage: ai <your message>]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Try asking about:]');
            this.terminal.echo('[[;#DAA520;]  • Programming questions]');
            this.terminal.echo('[[;#DAA520;]  • Career advice]');
            this.terminal.echo('[[;#DAA520;]  • Technology trends]');
            this.terminal.echo('[[;#DAA520;]  • Anime recommendations]');
            return;
        }
        
        const message = args.join(' ');
        this.terminal.echo(`[[;#87CEEB;]You: ${message}]`);
        this.terminal.echo('[[;#DAA520;]AI: Thinking...]');
        
        // Simulate AI response based on keywords
        setTimeout(() => {
            const response = this.generateAIResponse(message);
            this.terminal.echo(`[[;#4A7C59;]AI: ${response}]`);
        }, 1500);
    }
    
    generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('programming') || lowerMessage.includes('code')) {
            return "Programming is like solving puzzles! Start with the basics, practice regularly, and don't be afraid to make mistakes. What specific language or concept interests you?";
        }
        
        if (lowerMessage.includes('career') || lowerMessage.includes('job')) {
            return "For a successful tech career, focus on continuous learning, build a strong portfolio, and network with other developers. Contributing to open source projects is also valuable!";
        }
        
        if (lowerMessage.includes('anime')) {
            return "Ah, a fellow anime enthusiast! I'd recommend starting with classics like Attack on Titan, Death Note, or Studio Ghibli films. What genres do you enjoy?";
        }
        
        if (lowerMessage.includes('javascript') || lowerMessage.includes('js')) {
            return "JavaScript is everywhere! Master the fundamentals first: variables, functions, objects, and arrays. Then explore modern ES6+ features and frameworks like React or Vue.";
        }
        
        if (lowerMessage.includes('portfolio')) {
            return "A great portfolio showcases your best work with clean code, good documentation, and live demos. Include 3-5 projects that demonstrate different skills!";
        }
        
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello there! I'm here to help with any questions about programming, career advice, or even anime recommendations. What's on your mind?";
        }
        
        return "That's an interesting question! While I'm still learning, I'd suggest breaking down complex problems into smaller parts. Is there a specific aspect you'd like to explore further?";
    }
    
    explainConcept(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#87CEEB;]📚 CONCEPT EXPLAINER 📚]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]I can explain programming concepts and technologies!]');
            this.terminal.echo('[[;#DAA520;]Usage: explain <topic>]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Available topics:]');
            this.terminal.echo('[[;#DAA520;]  • javascript, react, nodejs, css, html]');
            this.terminal.echo('[[;#DAA520;]  • algorithms, recursion, async]');
            this.terminal.echo('[[;#DAA520;]  • git, api, database]');
            return;
        }
        
        const topic = args.join(' ').toLowerCase();
        const explanations = {
            'javascript': {
                title: 'JavaScript',
                description: 'A versatile programming language that runs in browsers and servers.',
                details: [
                    '• Dynamic typing - variables can hold any type',
                    '• Event-driven - responds to user interactions',
                    '• Prototype-based - objects can inherit from other objects',
                    '• First-class functions - functions are values'
                ]
            },
            'react': {
                title: 'React',
                description: 'A JavaScript library for building user interfaces.',
                details: [
                    '• Component-based - UI built from reusable pieces',
                    '• Virtual DOM - efficient updates to the real DOM',
                    '• JSX - HTML-like syntax in JavaScript',
                    '• State management - data that can change over time'
                ]
            },
            'async': {
                title: 'Asynchronous Programming',
                description: 'Code that doesn\'t block while waiting for operations to complete.',
                details: [
                    '• Promises - represent future values',
                    '• async/await - cleaner syntax for promises',
                    '• Callbacks - functions called when operations finish',
                    '• Event loop - manages asynchronous operations'
                ]
            },
            'git': {
                title: 'Git Version Control',
                description: 'A system for tracking changes in code over time.',
                details: [
                    '• Repository - project folder with history',
                    '• Commits - snapshots of your code',
                    '• Branches - parallel development paths',
                    '• Merge - combining changes from different branches'
                ]
            }
        };
        
        const explanation = explanations[topic];
        if (explanation) {
            this.terminal.echo(`[[;#87CEEB;]📖 ${explanation.title}]`);
            this.terminal.echo('');
            this.terminal.echo(`[[;#C9E7F0;]${explanation.description}]`);
            this.terminal.echo('');
            this.terminal.echo('[[;#DAA520;]Key concepts:]');
            explanation.details.forEach(detail => {
                this.terminal.echo(`[[;#C9E7F0;]${detail}]`);
            });
        } else {
            this.terminal.echo(`[[;#FF6B6B;]Sorry, I don't have an explanation for '${topic}' yet.]`);
            this.terminal.echo('[[;#C9E7F0;]Try: explain (without arguments) to see available topics]');
        }
    }
    
    practiceInterview(args) {
        if (!this.gameState.interview) {
            this.gameState.interview = {
                currentQuestion: 0,
                questions: [
                    {
                        question: "What is the difference between let, const, and var in JavaScript?",
                        hint: "Think about scope, hoisting, and reassignment",
                        answer: "var is function-scoped and hoisted, let is block-scoped, const is block-scoped and cannot be reassigned"
                    },
                    {
                        question: "Explain what a closure is in JavaScript",
                        hint: "Consider inner functions and variable access",
                        answer: "A closure is when an inner function has access to variables from its outer function's scope"
                    },
                    {
                        question: "What is the time complexity of binary search?",
                        hint: "Think about how the search space is reduced",
                        answer: "O(log n) because we eliminate half the search space each iteration"
                    }
                ]
            };
        }
        
        const action = args.length > 0 ? args[0].toLowerCase() : 'start';
        const interview = this.gameState.interview;
        
        if (action === 'start' || action === 'question') {
            if (interview.currentQuestion >= interview.questions.length) {
                this.terminal.echo('[[;#4A7C59;]🎉 Interview practice completed! Great job!]');
                this.terminal.echo('[[;#87CEEB;]Reset with: interview start]');
                return;
            }
            
            const q = interview.questions[interview.currentQuestion];
            this.terminal.echo('[[;#87CEEB;]💼 CODING INTERVIEW PRACTICE 💼]');
            this.terminal.echo('');
            this.terminal.echo(`[[;#DAA520;]Question ${interview.currentQuestion + 1}:]`);
            this.terminal.echo(`[[;#C9E7F0;]${q.question}]`);
            this.terminal.echo('');
            this.terminal.echo('[[;#87CEEB;]Commands: interview hint, interview answer, interview next]');
            
        } else if (action === 'hint') {
            const q = interview.questions[interview.currentQuestion];
            this.terminal.echo(`[[;#DAA520;]💡 Hint: ${q.hint}]`);
            
        } else if (action === 'answer') {
            const q = interview.questions[interview.currentQuestion];
            this.terminal.echo('[[;#4A7C59;]✅ Sample Answer:]');
            this.terminal.echo(`[[;#C9E7F0;]${q.answer}]`);
            
        } else if (action === 'next') {
            interview.currentQuestion++;
            this.practiceInterview(['question']);
            
        } else if (action === 'reset') {
            interview.currentQuestion = 0;
            this.terminal.echo('[[;#87CEEB;]Interview practice reset! Use: interview start]');
        }
    }
    
    // ===== EASTER EGGS & HIDDEN COMMANDS =====
    
    initEasterEggs() {
        // Add special command handling
        const originalExec = this.terminal.exec;
        this.terminal.exec = (command) => {
            if (this.handleEasterEgg(command)) {
                return;
            }
            originalExec.call(this.terminal, command);
        };
    }
    
    handleEasterEgg(command) {
        const cmd = command.toLowerCase().trim();
        
        if (cmd === 'konami') {
            this.terminal.echo('[[;#F472B6;]🎮 KONAMI CODE ACTIVATED! 🎮]');
            this.terminal.echo('[[;#87CEEB;]↑ ↑ ↓ ↓ ← → ← → B A]');
            this.terminal.echo('[[;#4A7C59;]You unlocked: Unlimited lives in Snake game!]');
            return true;
        }
        
        if (cmd === 'hack') {
            this.terminal.echo('[[;#00FF00;]HACKER MODE ACTIVATED]');
            this.terminal.echo('[[;#00FF00;]Accessing mainframe...]');
            this.terminal.echo('[[;#00FF00;]Bypassing firewall...]');
            this.terminal.echo('[[;#00FF00;]Access granted! Welcome, Neo.]');
            return true;
        }
        
        if (cmd === 'love') {
            this.terminal.echo('[[;#F472B6;]💖 LOVE MODE ACTIVATED 💖]');
            this.terminal.echo('[[;#F472B6;]Spreading love and positivity! ♡]');
            this.terminal.echo('[[;#F472B6;]Remember: Code with passion! ♡]');
            return true;
        }
        
        if (cmd === '42') {
            this.terminal.echo('[[;#DAA520;]🌌 THE ANSWER TO EVERYTHING 🌌]');
            this.terminal.echo('[[;#87CEEB;]42 is indeed the answer to the ultimate question]');
            this.terminal.echo('[[;#87CEEB;]of life, the universe, and everything!]');
            this.terminal.echo('[[;#DAA520;]- The Hitchhiker\'s Guide to the Galaxy]');
            return true;
        }
        
        return false;
    }
    
    // ===== ANIME STREAMING SYSTEM =====
    
    animeStreaming(args) {
        if (args.length === 0) {
            this.showAnimeMenu();
            return;
        }
        
        const action = args[0].toLowerCase();
        const query = args.slice(1).join(' ');
        
        switch (action) {
            case 'popular':
                this.showPopularAnime();
                break;
            case 'recent':
                this.showRecentAnime();
                break;
            case 'search':
                this.searchAnime(query);
                break;
            case 'info':
                this.getAnimeInfo(args[1]);
                break;
            default:
                this.searchAnime(args.join(' '));
                break;
        }
    }
    
    showAnimeMenu() {
        this.terminal.echo('[[;#87CEEB;]🎌 ANIME STREAMING CENTER 🎌]');
        this.terminal.echo('');
        this.terminal.echo('[[;#D4553D;]Welcome to your personal anime streaming platform!]');
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]📺 Available Commands:]');
        this.terminal.echo('  • [[;#87CEEB;]anime popular]     - Show popular anime');
        this.terminal.echo('  • [[;#87CEEB;]anime recent]      - Show recent releases');
        this.terminal.echo('  • [[;#87CEEB;]anime search <title>] - Search MyAnimeList database');
        this.terminal.echo('  • [[;#87CEEB;]anime info <mal_id>] - Get detailed anime information');
        this.terminal.echo('  • [[;#87CEEB;]mylist]           - Manage your watchlist');
        this.terminal.echo('');
        this.terminal.echo('[[;#DAA520;]💡 Quick Examples:]');
        this.terminal.echo('  [[;#C9E7F0;]anime popular]');
        this.terminal.echo('  [[;#C9E7F0;]anime search attack on titan]');
        this.terminal.echo('  [[;#C9E7F0;]anime info 16498]');
        this.terminal.echo('  [[;#C9E7F0;]mylist add naruto]');
        this.terminal.echo('');
    }
    
    showPopularAnime() {
        this.terminal.echo('[[;#87CEEB;]🔥 POPULAR ANIME 🔥]');
        this.terminal.echo('');
        
        this.animeDatabase.popular.forEach((anime, index) => {
            this.displayAnimeCard(anime, index + 1);
        });
        
        this.terminal.echo('[[;#DAA520;]💡 Use "watch <title>" to start watching!]');
        this.terminal.echo('');
    }
    
    showRecentAnime() {
        this.terminal.echo('[[;#87CEEB;]🆕 RECENT RELEASES 🆕]');
        this.terminal.echo('');
        
        this.animeDatabase.recent.forEach((anime, index) => {
            this.displayAnimeCard(anime, index + 1);
        });
        
        this.terminal.echo('[[;#DAA520;]💡 Use "watch <title>" to start watching!]');
        this.terminal.echo('');
    }
    
    async searchAnime(query) {
        if (!query) {
            this.terminal.echo('[[;#FF6B6B;]Please provide a search term]');
            this.terminal.echo('[[;#C9E7F0;]Usage: anime search <title>]');
            return;
        }
        
        this.terminal.echo(`[[;#87CEEB;]🔍 Searching for "${query}"...]`);
        this.terminal.echo('[[;#DAA520;]Fetching data from MyAnimeList API...]');
        
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=10`);
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (!data.data || data.data.length === 0) {
                this.terminal.echo(`[[;#FF6B6B;]No anime found matching "${query}"]`);
                this.terminal.echo('[[;#C9E7F0;]Try different keywords or check spelling]');
                return;
            }
            
            this.terminal.echo(`[[;#4A7C59;]✅ Found ${data.data.length} results]`);
            this.terminal.echo('');
            
            data.data.forEach((anime, index) => {
                this.displayJikanAnime(anime, index + 1);
            });
            
            this.terminal.echo('[[;#DAA520;]💡 Use "anime info <mal_id>" to see detailed information]');
            this.terminal.echo('');
            
        } catch (error) {
            this.terminal.echo('[[;#FF6B6B;]❌ Error fetching anime data]');
            this.terminal.echo(`[[;#C9E7F0;]${error.message}]`);
            this.terminal.echo('[[;#DAA520;]Please try again or check your internet connection]');
            
            // Fallback to local database
            this.terminal.echo('');
            this.terminal.echo('[[;#87CEEB;]📚 Searching local database instead...]');
            this.searchLocalAnime(query);
        }
    }
    
    displayJikanAnime(anime, index) {
        const title = anime.title || 'Unknown Title';
        const titleJapanese = anime.title_japanese || 'N/A';
        const score = anime.score ? `${anime.score}/10` : 'Not Rated';
        const episodes = anime.episodes || 'Unknown';
        const status = anime.status || 'Unknown';
        const year = anime.year || anime.aired?.from ? new Date(anime.aired.from).getFullYear() : 'Unknown';
        const genres = anime.genres ? anime.genres.slice(0, 3).map(g => g.name).join(', ') : 'Unknown';
        const synopsis = anime.synopsis ? 
            (anime.synopsis.length > 150 ? anime.synopsis.substring(0, 150) + '...' : anime.synopsis) : 
            'No description available';
        const malId = anime.mal_id;
        
        // Generate star rating
        const stars = anime.score ? '★'.repeat(Math.floor(anime.score / 2)) : '☆☆☆☆☆';
        
        this.terminal.echo(`[[;#4A7C59;]${index}. 🎌 ${title}]`);
        this.terminal.echo(`[[;#C9E7F0;]   Japanese: ${titleJapanese}]`);
        this.terminal.echo(`[[;#DAA520;]   Rating: ${stars} (${score})]`);
        this.terminal.echo(`[[;#87CEEB;]   Episodes: ${episodes} | Status: ${status} | Year: ${year}]`);
        this.terminal.echo(`[[;#C9E7F0;]   Genres: ${genres}]`);
        this.terminal.echo(`[[;#C9E7F0;]   ${synopsis}]`);
        this.terminal.echo(`[[;#DAA520;]   MAL ID: ${malId} | Use "anime info ${malId}" for details]`);
        this.terminal.echo('');
    }
    
    searchLocalAnime(query) {
        const allAnime = [...this.animeDatabase.popular, ...this.animeDatabase.recent];
        const results = allAnime.filter(anime => 
            anime.title.toLowerCase().includes(query.toLowerCase()) ||
            anime.japanese.toLowerCase().includes(query.toLowerCase()) ||
            anime.genre.some(g => g.toLowerCase().includes(query.toLowerCase()))
        );
        
        if (results.length === 0) {
            this.terminal.echo(`[[;#FF6B6B;]No local anime found matching "${query}"]`);
            return;
        }
        
        results.forEach((anime, index) => {
            this.displayAnimeCard(anime, index + 1);
        });
    }
    
    async getAnimeInfo(malId) {
        if (!malId) {
            this.terminal.echo('[[;#FF6B6B;]Please provide a MyAnimeList ID]');
            this.terminal.echo('[[;#C9E7F0;]Usage: anime info <mal_id>]');
            this.terminal.echo('[[;#DAA520;]Get MAL ID from search results]');
            return;
        }
        
        this.terminal.echo(`[[;#87CEEB;]📖 Fetching detailed information for MAL ID: ${malId}]`);
        this.terminal.echo('[[;#DAA520;]Loading from MyAnimeList API...]');
        
        try {
            // Fetch main anime data
            const animeResponse = await fetch(`https://api.jikan.moe/v4/anime/${malId}`);
            if (!animeResponse.ok) {
                throw new Error(`Anime not found (ID: ${malId})`);
            }
            const animeData = await animeResponse.json();
            
            // Fetch additional data (characters, staff, etc.)
            const [charactersResponse, staffResponse, statsResponse] = await Promise.allSettled([
                fetch(`https://api.jikan.moe/v4/anime/${malId}/characters`),
                fetch(`https://api.jikan.moe/v4/anime/${malId}/staff`),
                fetch(`https://api.jikan.moe/v4/anime/${malId}/statistics`)
            ]);
            
            this.displayDetailedAnimeInfo(animeData.data, {
                characters: charactersResponse.status === 'fulfilled' ? await charactersResponse.value.json() : null,
                staff: staffResponse.status === 'fulfilled' ? await staffResponse.value.json() : null,
                stats: statsResponse.status === 'fulfilled' ? await statsResponse.value.json() : null
            });
            
        } catch (error) {
            this.terminal.echo('[[;#FF6B6B;]❌ Error fetching detailed anime information]');
            this.terminal.echo(`[[;#C9E7F0;]${error.message}]`);
            this.terminal.echo('[[;#DAA520;]Please check the MAL ID and try again]');
        }
    }
    
    displayDetailedAnimeInfo(anime, additionalData) {
        this.terminal.echo('[[;#87CEEB;]' + '='.repeat(60) + ']');
        this.terminal.echo(`[[;#D4553D;]🎌 ${anime.title}]`);
        this.terminal.echo('[[;#87CEEB;]' + '='.repeat(60) + ']');
        this.terminal.echo('');
        
        // Basic Information
        this.terminal.echo('[[;#4A7C59;]📋 BASIC INFORMATION]');
        this.terminal.echo(`[[;#C9E7F0;]Japanese Title: ${anime.title_japanese || 'N/A'}]`);
        this.terminal.echo(`[[;#C9E7F0;]English Title: ${anime.title_english || 'N/A'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Type: ${anime.type || 'Unknown'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Episodes: ${anime.episodes || 'Unknown'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Status: ${anime.status || 'Unknown'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Aired: ${this.formatAiredDate(anime.aired)}]`);
        this.terminal.echo(`[[;#C9E7F0;]Duration: ${anime.duration || 'Unknown'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Rating: ${anime.rating || 'Not Rated'}]`);
        this.terminal.echo('');
        
        // Ratings & Statistics
        this.terminal.echo('[[;#4A7C59;]⭐ RATINGS & POPULARITY]');
        const stars = anime.score ? '★'.repeat(Math.floor(anime.score / 2)) : '☆☆☆☆☆';
        this.terminal.echo(`[[;#DAA520;]Score: ${stars} ${anime.score || 'N/A'}/10]`);
        this.terminal.echo(`[[;#C9E7F0;]Ranked: #${anime.rank || 'N/A'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Popularity: #${anime.popularity || 'N/A'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Members: ${anime.members?.toLocaleString() || 'N/A'}]`);
        this.terminal.echo(`[[;#C9E7F0;]Favorites: ${anime.favorites?.toLocaleString() || 'N/A'}]`);
        this.terminal.echo('');
        
        // Genres & Themes
        if (anime.genres && anime.genres.length > 0) {
            this.terminal.echo('[[;#4A7C59;]🎭 GENRES & THEMES]');
            const genres = anime.genres.map(g => g.name).join(', ');
            this.terminal.echo(`[[;#C9E7F0;]Genres: ${genres}]`);
            
            if (anime.themes && anime.themes.length > 0) {
                const themes = anime.themes.map(t => t.name).join(', ');
                this.terminal.echo(`[[;#C9E7F0;]Themes: ${themes}]`);
            }
            
            if (anime.demographics && anime.demographics.length > 0) {
                const demographics = anime.demographics.map(d => d.name).join(', ');
                this.terminal.echo(`[[;#C9E7F0;]Demographics: ${demographics}]`);
            }
            this.terminal.echo('');
        }
        
        // Studios & Producers
        if (anime.studios && anime.studios.length > 0) {
            this.terminal.echo('[[;#4A7C59;]🏢 PRODUCTION]');
            const studios = anime.studios.map(s => s.name).join(', ');
            this.terminal.echo(`[[;#C9E7F0;]Studios: ${studios}]`);
            
            if (anime.producers && anime.producers.length > 0) {
                const producers = anime.producers.slice(0, 3).map(p => p.name).join(', ');
                this.terminal.echo(`[[;#C9E7F0;]Producers: ${producers}]`);
            }
            this.terminal.echo('');
        }
        
        // Synopsis
        if (anime.synopsis) {
            this.terminal.echo('[[;#4A7C59;]📖 SYNOPSIS]');
            const synopsis = anime.synopsis.replace(/\[Written by MAL Rewrite\]/g, '').trim();
            this.terminal.echo(`[[;#C9E7F0;]${synopsis}]`);
            this.terminal.echo('');
        }
        
        // Characters (top 5)
        if (additionalData.characters && additionalData.characters.data) {
            this.terminal.echo('[[;#4A7C59;]👥 MAIN CHARACTERS]');
            const mainCharacters = additionalData.characters.data
                .filter(char => char.role === 'Main')
                .slice(0, 5);
            
            mainCharacters.forEach(char => {
                const name = char.character.name;
                const voiceActor = char.voice_actors && char.voice_actors.length > 0 
                    ? char.voice_actors.find(va => va.language === 'Japanese')?.person.name || 'Unknown'
                    : 'Unknown';
                this.terminal.echo(`[[;#C9E7F0;]• ${name} (CV: ${voiceActor})]`);
            });
            this.terminal.echo('');
        }
        
        // External Links
        if (anime.external) {
            this.terminal.echo('[[;#4A7C59;]🔗 EXTERNAL LINKS]');
            this.terminal.echo(`[[;#87CEEB;]MyAnimeList: ${anime.url}]`);
            
            const streamingLinks = anime.external.filter(link => 
                ['Crunchyroll', 'Funimation', 'Netflix', 'Hulu'].includes(link.name)
            );
            
            if (streamingLinks.length > 0) {
                streamingLinks.forEach(link => {
                    this.terminal.echo(`[[;#87CEEB;]${link.name}: ${link.url}]`);
                });
            }
            this.terminal.echo('');
        }
        
        // Additional Commands
        this.terminal.echo('[[;#DAA520;]💡 ADDITIONAL ACTIONS]');
        this.terminal.echo(`[[;#C9E7F0;]mylist add ${anime.title} - Add to your watchlist]`);
        this.terminal.echo(`[[;#C9E7F0;]anime search ${anime.title} - Find similar anime]`);
        this.terminal.echo('');
    }
    
    formatAiredDate(aired) {
        if (!aired) return 'Unknown';
        
        const from = aired.from ? new Date(aired.from).toLocaleDateString() : 'Unknown';
        const to = aired.to ? new Date(aired.to).toLocaleDateString() : 'Ongoing';
        
        return aired.from && aired.to ? `${from} to ${to}` : from;
    }
    
    displayAnimeCard(anime, index) {
        const stars = '★'.repeat(Math.floor(anime.rating));
        const genres = anime.genre.slice(0, 3).join(', ');
        
        this.terminal.echo(`[[;#4A7C59;]${index}. ${anime.thumbnail} ${anime.title}]`);
        this.terminal.echo(`[[;#C9E7F0;]   Japanese: ${anime.japanese}]`);
        this.terminal.echo(`[[;#DAA520;]   Rating: ${stars} (${anime.rating}/10)]`);
        this.terminal.echo(`[[;#87CEEB;]   Episodes: ${anime.episodes} | Status: ${anime.status} | Year: ${anime.year}]`);
        this.terminal.echo(`[[;#C9E7F0;]   Genre: ${genres}]`);
        this.terminal.echo(`[[;#C9E7F0;]   Studio: ${anime.studio}]`);
        this.terminal.echo(`[[;#C9E7F0;]   ${anime.description}]`);
        this.terminal.echo('');
    }
    
    watchAnime(args) {
        if (args.length === 0) {
            this.terminal.echo('[[;#FF6B6B;]Please specify an anime to watch]');
            this.terminal.echo('[[;#C9E7F0;]Usage: watch <anime-title> [episode-number]]');
            return;
        }
        
        const query = args.slice(0, -1).join(' ').toLowerCase();
        const episodeNum = args[args.length - 1];
        const isEpisodeSpecified = !isNaN(episodeNum);
        const searchQuery = isEpisodeSpecified ? query : args.join(' ').toLowerCase();
        const episode = isEpisodeSpecified ? parseInt(episodeNum) : 1;
        
        const allAnime = [...this.animeDatabase.popular, ...this.animeDatabase.recent];
        const anime = allAnime.find(a => 
            a.title.toLowerCase().includes(searchQuery) ||
            a.japanese.toLowerCase().includes(searchQuery)
        );
        
        if (!anime) {
            this.terminal.echo(`[[;#FF6B6B;]Anime not found: "${searchQuery}"]`);
            this.terminal.echo('[[;#C9E7F0;]Try: watch attack on titan, watch demon slayer, etc.]');
            return;
        }
        
        if (episode > anime.episodes) {
            this.terminal.echo(`[[;#FF6B6B;]Episode ${episode} not available. ${anime.title} has ${anime.episodes} episodes.]`);
            return;
        }
        
        this.startWatching(anime, episode);
    }
    
    startWatching(anime, episode) {
        this.terminal.echo(`[[;#87CEEB;]🎬 NOW WATCHING 🎬]`);
        this.terminal.echo('');
        this.terminal.echo(`[[;#D4553D;]${anime.thumbnail} ${anime.title}]`);
        this.terminal.echo(`[[;#C9E7F0;]Episode ${episode} of ${anime.episodes}]`);
        this.terminal.echo(`[[;#DAA520;]${anime.japanese}]`);
        this.terminal.echo('');
        
        // Create video player simulation
        const playerContainer = $('<div class="anime-player"></div>');
        const playerScreen = $('<div class="player-screen"></div>');
        const playerControls = $('<div class="player-controls"></div>');
        
        playerScreen.html(`
            <div class="video-placeholder">
                <div class="play-icon">▶️</div>
                <div class="video-title">${anime.title}</div>
                <div class="video-episode">Episode ${episode}</div>
                <div class="video-info">Click to simulate streaming</div>
            </div>
        `);
        
        playerControls.html(`
            <button class="control-btn" onclick="this.innerHTML='⏸️'">▶️</button>
            <span class="time-display">00:00 / 24:00</span>
            <button class="control-btn" onclick="alert('Next Episode')">⏭️</button>
            <button class="control-btn" onclick="alert('Fullscreen Mode')">⛶</button>
        `);
        
        playerContainer.append(playerScreen);
        playerContainer.append(playerControls);
        this.terminal.echo(playerContainer);
        
        this.terminal.echo('');
        this.terminal.echo('[[;#4A7C59;]📺 Streaming Controls:]');
        this.terminal.echo('  • [[;#87CEEB;]Space] - Play/Pause');
        this.terminal.echo('  • [[;#87CEEB;]→] - Next Episode');
        this.terminal.echo('  • [[;#87CEEB;]←] - Previous Episode');
        this.terminal.echo('  • [[;#87CEEB;]F] - Fullscreen');
        this.terminal.echo('  • [[;#87CEEB;]Q] - Quit watching');
        this.terminal.echo('');
        this.terminal.echo(`[[;#DAA520;]🔗 Stream URL: ${anime.streamUrl}]`);
        this.terminal.echo('[[;#C9E7F0;]Note: This is a demo player. In a real implementation, this would connect to actual streaming services.]');
        
        // Add to watch history
        this.addToWatchHistory(anime, episode);
    }
    
    manageWatchlist(args) {
        if (args.length === 0) {
            this.showWatchlist();
            return;
        }
        
        const action = args[0].toLowerCase();
        const animeTitle = args.slice(1).join(' ');
        
        switch (action) {
            case 'add':
                this.addToWatchlist(animeTitle);
                break;
            case 'remove':
                this.removeFromWatchlist(animeTitle);
                break;
            case 'show':
            case 'list':
                this.showWatchlist();
                break;
            default:
                this.terminal.echo('[[;#FF6B6B;]Invalid action. Use: add, remove, or show]');
                break;
        }
    }
    
    showWatchlist() {
        this.terminal.echo('[[;#87CEEB;]📋 MY ANIME WATCHLIST 📋]');
        this.terminal.echo('');
        
        if (this.watchlist.length === 0) {
            this.terminal.echo('[[;#DAA520;]Your watchlist is empty]');
            this.terminal.echo('[[;#C9E7F0;]Use "mylist add <anime-title>" to add anime to your list]');
            return;
        }
        
        this.watchlist.forEach((anime, index) => {
            this.terminal.echo(`[[;#4A7C59;]${index + 1}. ${anime.thumbnail} ${anime.title}]`);
            this.terminal.echo(`[[;#C9E7F0;]   Status: ${anime.status} | Episodes: ${anime.episodes}]`);
        });
        
        this.terminal.echo('');
        this.terminal.echo('[[;#DAA520;]💡 Use "watch <title>" to start watching from your list!]');
    }
    
    addToWatchlist(animeTitle) {
        if (!animeTitle) {
            this.terminal.echo('[[;#FF6B6B;]Please specify an anime title]');
            return;
        }
        
        const allAnime = [...this.animeDatabase.popular, ...this.animeDatabase.recent];
        const anime = allAnime.find(a => 
            a.title.toLowerCase().includes(animeTitle.toLowerCase())
        );
        
        if (!anime) {
            this.terminal.echo(`[[;#FF6B6B;]Anime not found: "${animeTitle}"]`);
            return;
        }
        
        if (this.watchlist.some(w => w.id === anime.id)) {
            this.terminal.echo(`[[;#DAA520;]"${anime.title}" is already in your watchlist]`);
            return;
        }
        
        this.watchlist.push(anime);
        this.terminal.echo(`[[;#4A7C59;]✅ Added "${anime.title}" to your watchlist!]`);
    }
    
    removeFromWatchlist(animeTitle) {
        if (!animeTitle) {
            this.terminal.echo('[[;#FF6B6B;]Please specify an anime title]');
            return;
        }
        
        const index = this.watchlist.findIndex(anime => 
            anime.title.toLowerCase().includes(animeTitle.toLowerCase())
        );
        
        if (index === -1) {
            this.terminal.echo(`[[;#FF6B6B;]"${animeTitle}" not found in your watchlist]`);
            return;
        }
        
        const removed = this.watchlist.splice(index, 1)[0];
        this.terminal.echo(`[[;#4A7C59;]✅ Removed "${removed.title}" from your watchlist]`);
    }
    
    addToWatchHistory(anime, episode) {
        const historyEntry = {
            anime: anime,
            episode: episode,
            watchedAt: new Date().toISOString(),
            timestamp: Date.now()
        };
        
        // Remove existing entry for same anime
        this.watchHistory = this.watchHistory.filter(h => h.anime.id !== anime.id);
        
        // Add new entry at beginning
        this.watchHistory.unshift(historyEntry);
        
        // Keep only last 10 entries
        if (this.watchHistory.length > 10) {
            this.watchHistory = this.watchHistory.slice(0, 10);
        }
    }
    
    // ===== GITHUB INTEGRATION =====
    
    async syncWithGitHub(args) {
        const action = args.length > 0 ? args[0].toLowerCase() : 'github';
        
        if (action === 'github' || action === 'profile') {
            this.terminal.echo('[[;#87CEEB;]🔄 Syncing with GitHub Profile...]');
            await this.getGithubInfo(['Tiddiesxxl']);
            
        } else if (action === 'projects') {
            this.terminal.echo('[[;#87CEEB;]🔄 Syncing Projects from GitHub...]');
            await this.showProjects([]);
            
        } else {
            this.terminal.echo('[[;#87CEEB;]🔄 GITHUB SYNC OPTIONS 🔄]');
            this.terminal.echo('');
            this.terminal.echo('[[;#C9E7F0;]Available sync options:]');
            this.terminal.echo('[[;#DAA520;]  sync github   - Sync GitHub profile information]');
            this.terminal.echo('[[;#DAA520;]  sync projects - Sync project repositories]');
            this.terminal.echo('');
            this.terminal.echo('[[;#4A7C59;]💡 GitHub Integration Features:]');
            this.terminal.echo('[[;#C9E7F0;]  • Live repository data from GitHub API]');
            this.terminal.echo('[[;#C9E7F0;]  • Real-time project statistics]');
            this.terminal.echo('[[;#C9E7F0;]  • Automatic project discovery]');
            this.terminal.echo('[[;#C9E7F0;]  • Repository details and metrics]');
        }
    }

}

// Additional utility functions
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Easter eggs and fun commands
$(document).ready(function() {
    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    $(document).keydown(function(e) {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            $('#terminal').terminal().echo('[[;#F472B6;]🎉 Konami Code activated! You found the easter egg!]');
            konamiCode = [];
        }
    });
});