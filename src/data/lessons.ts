import { Lesson } from '../types/lesson';

export const lessons: Lesson[] = [
  {
    id: 'pwd',
    title: 'pwd - Print Working Directory',
    description: 'Learn to display your current location in the file system',
    category: 'basics',
    theory: `The 'pwd' command stands for "Print Working Directory". It's one of the most fundamental commands in shell scripting and system administration. This command displays the absolute path of the directory you're currently in.

Understanding your current location in the file system is crucial for:
- Navigating effectively through directories
- Writing scripts that work from any location
- Understanding relative vs absolute paths
- Debugging file operation issues

The command always returns the full path from the root directory (/) to your current location.`,
    syntax: 'pwd [OPTION]',
    examples: [
      {
        command: 'pwd',
        description: 'Display current working directory',
        output: '/home/user/documents'
      },
      {
        command: 'pwd -P',
        description: 'Display physical directory (resolve symbolic links)',
        output: '/home/user/documents'
      }
    ],
    exercises: [
      {
        task: 'Display your current working directory',
        hint: 'Use the pwd command without any arguments',
        solution: 'pwd'
      },
      {
        task: 'Display the physical path (resolving any symbolic links)',
        hint: 'Use the -P option with pwd',
        solution: 'pwd -P'
      }
    ]
  },
  {
    id: 'ls',
    title: 'ls - List Directory Contents',
    description: 'Explore and list files and directories',
    category: 'basics',
    theory: `The 'ls' command is essential for exploring the file system. It lists the contents of directories and provides detailed information about files and folders.

Key concepts:
- Default behavior lists current directory contents
- Hidden files (starting with .) are not shown by default
- Different options provide various levels of detail
- File permissions, ownership, and timestamps can be displayed
- Color coding helps distinguish file types

This command is fundamental for:
- File system navigation and exploration
- Understanding file permissions and ownership
- Monitoring file changes and timestamps
- Writing scripts that process multiple files`,
    syntax: 'ls [OPTION]... [FILE]...',
    examples: [
      {
        command: 'ls',
        description: 'List files and directories in current directory',
        output: 'documents  downloads  pictures  videos'
      },
      {
        command: 'ls -l',
        description: 'Long format listing with details',
        output: 'drwxr-xr-x 2 user user 4096 Jan 15 10:30 documents'
      },
      {
        command: 'ls -la',
        description: 'Long format including hidden files',
        output: 'drwxr-xr-x 2 user user 4096 Jan 15 10:30 .\ndrwxr-xr-x 3 user user 4096 Jan 15 10:25 ..\n-rw-r--r-- 1 user user  220 Jan 15 10:25 .bashrc'
      },
      {
        command: 'ls -lh',
        description: 'Human-readable file sizes',
        output: 'drwxr-xr-x 2 user user 4.0K Jan 15 10:30 documents'
      }
    ],
    exercises: [
      {
        task: 'List all files in the current directory',
        hint: 'Use ls without any options',
        solution: 'ls'
      },
      {
        task: 'List files with detailed information including permissions',
        hint: 'Use the -l option for long format',
        solution: 'ls -l'
      },
      {
        task: 'List all files including hidden ones',
        hint: 'Use the -a option to show all files',
        solution: 'ls -a'
      }
    ]
  },
  {
    id: 'cd',
    title: 'cd - Change Directory',
    description: 'Navigate through the file system',
    category: 'basics',
    theory: `The 'cd' command (Change Directory) is used to navigate through the file system. It's one of the most frequently used commands in shell scripting and system administration.

Important concepts:
- Absolute paths start from root (/) and specify complete location
- Relative paths are relative to current directory
- Special shortcuts: ~ (home), .. (parent), . (current), - (previous)
- No output means successful directory change
- Error messages appear when directory doesn't exist or no permission

Navigation patterns:
- Forward navigation: moving deeper into directory structure
- Backward navigation: moving up to parent directories
- Direct navigation: jumping to any location using absolute paths`,
    syntax: 'cd [DIRECTORY]',
    examples: [
      {
        command: 'cd /home/user',
        description: 'Change to absolute path',
        output: ''
      },
      {
        command: 'cd documents',
        description: 'Change to subdirectory',
        output: ''
      },
      {
        command: 'cd ..',
        description: 'Move to parent directory',
        output: ''
      },
      {
        command: 'cd ~',
        description: 'Change to home directory',
        output: ''
      },
      {
        command: 'cd -',
        description: 'Change to previous directory',
        output: '/home/user/documents'
      }
    ],
    exercises: [
      {
        task: 'Navigate to your home directory',
        hint: 'Use the ~ shortcut',
        solution: 'cd ~'
      },
      {
        task: 'Move up one directory level',
        hint: 'Use .. to go to parent directory',
        solution: 'cd ..'
      },
      {
        task: 'Go back to the previous directory you were in',
        hint: 'Use the - option to return to previous location',
        solution: 'cd -'
      }
    ]
  },
  {
    id: 'mkdir',
    title: 'mkdir - Make Directory',
    description: 'Create new directories and folder structures',
    category: 'file-operations',
    theory: `The 'mkdir' command creates new directories in the file system. It's essential for organizing files and setting up project structures.

Key features:
- Creates single or multiple directories
- Can create parent directories if they don't exist (-p option)
- Sets permissions for new directories
- Fails if directory already exists (unless using specific options)
- Returns error if parent directory doesn't exist (without -p)

Best practices:
- Use meaningful directory names
- Consider directory permissions from the start
- Plan directory structure before creation
- Use -p for creating nested directory structures safely`,
    syntax: 'mkdir [OPTION]... DIRECTORY...',
    examples: [
      {
        command: 'mkdir project',
        description: 'Create a single directory',
        output: ''
      },
      {
        command: 'mkdir dir1 dir2 dir3',
        description: 'Create multiple directories',
        output: ''
      },
      {
        command: 'mkdir -p project/src/components',
        description: 'Create nested directories',
        output: ''
      },
      {
        command: 'mkdir -m 755 public_dir',
        description: 'Create directory with specific permissions',
        output: ''
      }
    ],
    exercises: [
      {
        task: 'Create a directory named "workspace"',
        hint: 'Use mkdir followed by the directory name',
        solution: 'mkdir workspace'
      },
      {
        task: 'Create a nested directory structure "projects/web/frontend"',
        hint: 'Use the -p option to create parent directories',
        solution: 'mkdir -p projects/web/frontend'
      },
      {
        task: 'Create three directories: "docs", "src", and "tests"',
        hint: 'List multiple directory names after mkdir',
        solution: 'mkdir docs src tests'
      }
    ]
  },
  {
    id: 'touch',
    title: 'touch - Create Files & Update Timestamps',
    description: 'Create empty files and modify file timestamps',
    category: 'file-operations',
    theory: `The 'touch' command serves two main purposes: creating empty files and updating file timestamps. It's a versatile tool for file management and script automation.

Primary functions:
- Create empty files quickly
- Update access and modification times
- Create multiple files simultaneously
- Useful in automation scripts for file existence checks

Common use cases:
- Creating placeholder files for development
- Updating timestamps to trigger build systems
- Creating log files before writing to them
- Setting up file structures for projects
- Testing file permission and access scenarios`,
    syntax: 'touch [OPTION]... FILE...',
    examples: [
      {
        command: 'touch newfile.txt',
        description: 'Create an empty file',
        output: ''
      },
      {
        command: 'touch file1.txt file2.txt file3.txt',
        description: 'Create multiple files',
        output: ''
      },
      {
        command: 'touch -t 202301151030 oldfile.txt',
        description: 'Set specific timestamp',
        output: ''
      },
      {
        command: 'touch existing_file.txt',
        description: 'Update timestamp of existing file',
        output: ''
      }
    ],
    exercises: [
      {
        task: 'Create an empty file named "readme.txt"',
        hint: 'Use touch followed by the filename',
        solution: 'touch readme.txt'
      },
      {
        task: 'Create three files: "index.html", "style.css", and "script.js"',
        hint: 'List all filenames after the touch command',
        solution: 'touch index.html style.css script.js'
      },
      {
        task: 'Update the timestamp of an existing file called "log.txt"',
        hint: 'Running touch on existing files updates their timestamp',
        solution: 'touch log.txt'
      }
    ]
  },
  {
    id: 'cat',
    title: 'cat - Display File Contents',
    description: 'View and concatenate file contents',
    category: 'file-operations',
    theory: `The 'cat' command (concatenate) is used to display file contents, combine multiple files, and create new files. It's one of the most commonly used commands for file content operations.

Key capabilities:
- Display entire file contents to terminal
- Combine multiple files into one output
- Number lines for easier reading
- Show non-printing characters
- Create simple files with inline content

Best practices:
- Use for small to medium files (large files may overwhelm terminal)
- Combine with other commands using pipes
- Use line numbering for code review and debugging
- Consider alternatives like 'less' or 'more' for large files`,
    syntax: 'cat [OPTION]... [FILE]...',
    examples: [
      {
        command: 'cat file.txt',
        description: 'Display file contents',
        output: 'Hello, World!\nThis is a sample file.'
      },
      {
        command: 'cat file1.txt file2.txt',
        description: 'Concatenate multiple files',
        output: 'Contents of file1\nContents of file2'
      },
      {
        command: 'cat -n file.txt',
        description: 'Display with line numbers',
        output: '1  Hello, World!\n2  This is a sample file.'
      },
      {
        command: 'cat > newfile.txt',
        description: 'Create file with content (type content, then Ctrl+D)',
        output: ''
      }
    ],
    exercises: [
      {
        task: 'Display the contents of a file named "config.txt"',
        hint: 'Use cat followed by the filename',
        solution: 'cat config.txt'
      },
      {
        task: 'Show the contents of "file1.txt" with line numbers',
        hint: 'Use the -n option to display line numbers',
        solution: 'cat -n file1.txt'
      },
      {
        task: 'Combine and display contents of "part1.txt" and "part2.txt"',
        hint: 'List both filenames after cat command',
        solution: 'cat part1.txt part2.txt'
      }
    ]
  },
  {
    id: 'cp',
    title: 'cp - Copy Files and Directories',
    description: 'Copy files and directories to new locations',
    category: 'file-operations',
    theory: `The 'cp' command copies files and directories from one location to another. It's essential for backup operations, file distribution, and creating file templates.

Important concepts:
- Source and destination specify what to copy and where
- Preserves or modifies file attributes based on options
- Can copy single files, multiple files, or entire directories
- Recursive copying needed for directories (-r or -R)
- Interactive mode prevents accidental overwrites (-i)

Safety considerations:
- Always verify source and destination paths
- Use interactive mode when unsure about overwrites
- Understand the difference between copying files vs directories
- Be careful with wildcard patterns to avoid unintended copies`,
    syntax: 'cp [OPTION]... SOURCE... DIRECTORY',
    examples: [
      {
        command: 'cp file.txt backup.txt',
        description: 'Copy file to new name',
        output: ''
      },
      {
        command: 'cp file.txt /path/to/destination/',
        description: 'Copy file to different directory',
        output: ''
      },
      {
        command: 'cp -r directory/ backup_directory/',
        description: 'Copy directory recursively',
        output: ''
      },
      {
        command: 'cp -i file.txt existing_file.txt',
        description: 'Interactive copy (prompts before overwrite)',
        output: 'cp: overwrite \'existing_file.txt\'? '
      }
    ],
    exercises: [
      {
        task: 'Copy "document.txt" to "document_backup.txt"',
        hint: 'Use cp with source and destination filenames',
        solution: 'cp document.txt document_backup.txt'
      },
      {
        task: 'Copy the directory "projects" to "projects_backup" including all contents',
        hint: 'Use the -r option for recursive directory copying',
        solution: 'cp -r projects projects_backup'
      },
      {
        task: 'Copy "config.conf" to "/etc/" with interactive prompting',
        hint: 'Use the -i option for interactive mode',
        solution: 'cp -i config.conf /etc/'
      }
    ]
  },
  {
    id: 'mv',
    title: 'mv - Move and Rename Files',
    description: 'Move files between directories and rename them',
    category: 'file-operations',
    theory: `The 'mv' command moves files and directories from one location to another, and can also rename them. Unlike 'cp', it removes the original file after creating the copy.

Key operations:
- Move files between directories
- Rename files and directories
- Move multiple files to a directory
- Works with both files and directories without special options
- Atomic operation: move completes fully or fails completely

Important notes:
- Moving within the same filesystem is fast (just updates directory entries)
- Moving across filesystems involves copying then deleting
- Be cautious as there's no automatic backup of overwritten files
- Use interactive mode (-i) to prevent accidental overwrites`,
    syntax: 'mv [OPTION]... SOURCE... DIRECTORY',
    examples: [
      {
        command: 'mv oldname.txt newname.txt',
        description: 'Rename a file',
        output: ''
      },
      {
        command: 'mv file.txt /path/to/destination/',
        description: 'Move file to different directory',
        output: ''
      },
      {
        command: 'mv *.txt documents/',
        description: 'Move all .txt files to documents directory',
        output: ''
      },
      {
        command: 'mv -i file.txt existing_file.txt',
        description: 'Interactive move (prompts before overwrite)',
        output: 'mv: overwrite \'existing_file.txt\'? '
      }
    ],
    exercises: [
      {
        task: 'Rename "old_report.txt" to "new_report.txt"',
        hint: 'Use mv with the old name and new name',
        solution: 'mv old_report.txt new_report.txt'
      },
      {
        task: 'Move "temp.log" to the "logs" directory',
        hint: 'Use mv with the file and destination directory',
        solution: 'mv temp.log logs/'
      },
      {
        task: 'Move all .pdf files to the "documents" folder with interactive prompting',
        hint: 'Use wildcards and the -i option',
        solution: 'mv -i *.pdf documents/'
      }
    ]
  },
  {
    id: 'rm',
    title: 'rm - Remove Files and Directories',
    description: 'Delete files and directories permanently',
    category: 'file-operations',
    theory: `The 'rm' command permanently removes files and directories from the filesystem. This is a powerful and potentially dangerous command that requires careful use.

Critical safety points:
- Deleted files are typically NOT recoverable
- No built-in "trash" or "recycle bin" functionality
- Use interactive mode (-i) when uncertain
- Always double-check paths before executing
- Consider using 'ls' first to verify what will be deleted

Options for different scenarios:
- Remove individual files
- Remove multiple files with patterns
- Remove directories recursively (-r)
- Force removal without prompts (-f)
- Interactive removal with confirmation (-i)

Best practices:
- Always verify the command before pressing Enter
- Use wildcards carefully to avoid unintended deletions
- Consider creating backups before removing important files`,
    syntax: 'rm [OPTION]... FILE...',
    examples: [
      {
        command: 'rm file.txt',
        description: 'Remove a single file',
        output: ''
      },
      {
        command: 'rm file1.txt file2.txt file3.txt',
        description: 'Remove multiple files',
        output: ''
      },
      {
        command: 'rm -r directory/',
        description: 'Remove directory and all contents',
        output: ''
      },
      {
        command: 'rm -i *.tmp',
        description: 'Interactively remove all .tmp files',
        output: 'rm: remove regular file \'temp1.tmp\'? '
      }
    ],
    exercises: [
      {
        task: 'Remove a file named "unwanted.txt"',
        hint: 'Use rm followed by the filename',
        solution: 'rm unwanted.txt'
      },
      {
        task: 'Remove the directory "old_project" and all its contents',
        hint: 'Use the -r option for recursive removal',
        solution: 'rm -r old_project'
      },
      {
        task: 'Remove all .log files with interactive confirmation',
        hint: 'Use wildcards with the -i option',
        solution: 'rm -i *.log'
      }
    ]
  },
  {
    id: 'chmod',
    title: 'chmod - Change File Permissions',
    description: 'Modify file and directory permissions',
    category: 'permissions',
    theory: `The 'chmod' command changes file and directory permissions in Unix-like systems. Understanding permissions is crucial for system security and proper file access control.

Permission system basics:
- Three permission types: read (r), write (w), execute (x)
- Three user categories: owner (u), group (g), others (o)
- Permissions can be set using symbolic or numeric notation
- Execute permission required for directories to enter them
- Read permission needed to list directory contents

Numeric notation:
- 4 = read, 2 = write, 1 = execute
- Combine values: 7 (4+2+1) = read+write+execute
- Three digits: owner, group, others
- Example: 755 = owner full access, group/others read+execute

Symbolic notation:
- Use +/- to add/remove permissions
- Use = to set exact permissions
- Examples: +x (add execute), g-w (remove group write), u=rw (set owner to read+write only)`,
    syntax: 'chmod [OPTION]... MODE[,MODE]... FILE...',
    examples: [
      {
        command: 'chmod 755 script.sh',
        description: 'Set permissions using numeric notation',
        output: ''
      },
      {
        command: 'chmod +x program',
        description: 'Add execute permission for all',
        output: ''
      },
      {
        command: 'chmod u+w,g-r file.txt',
        description: 'Add write for owner, remove read for group',
        output: ''
      },
      {
        command: 'chmod -R 644 documents/',
        description: 'Recursively set permissions on directory',
        output: ''
      }
    ],
    exercises: [
      {
        task: 'Make a script file "deploy.sh" executable for everyone',
        hint: 'Use +x to add execute permissions',
        solution: 'chmod +x deploy.sh'
      },
      {
        task: 'Set permissions on "config.txt" to 644 (owner read/write, others read only)',
        hint: 'Use numeric notation: 6=read+write, 4=read only',
        solution: 'chmod 644 config.txt'
      },
      {
        task: 'Remove write permission for group and others on "private.txt"',
        hint: 'Use symbolic notation with go-w',
        solution: 'chmod go-w private.txt'
      }
    ]
  }
];

export const getLesson = (id: string): Lesson | undefined => {
  return lessons.find(lesson => lesson.id === id);
};

export const getLessonsByCategory = (category: string) => {
  return lessons.filter(lesson => lesson.category === category);
};