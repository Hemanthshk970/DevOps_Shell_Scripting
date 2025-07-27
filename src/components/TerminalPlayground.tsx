import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Check, X, RotateCcw, Lightbulb } from 'lucide-react';

interface Exercise {
  task: string;
  hint: string;
  solution: string;
}

interface TerminalPlaygroundProps {
  exercise: Exercise;
  onComplete: () => void;
}

const TerminalPlayground: React.FC<TerminalPlaygroundProps> = ({ exercise, onComplete }) => {
  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: string; isCorrect?: boolean }>>([]);
  const [showHint, setShowHint] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCommand('');
    setHistory([]);
    setShowHint(false);
    setIsCompleted(false);
  }, [exercise]);

  const simulateCommand = (cmd: string): string => {
    const trimmedCmd = cmd.trim();
    
    // Simple command simulation
    if (trimmedCmd === 'pwd') {
      return '/home/user/workspace';
    } else if (trimmedCmd === 'ls') {
      return 'documents  downloads  pictures  projects';
    } else if (trimmedCmd === 'ls -l') {
      return 'drwxr-xr-x 2 user user 4096 Jan 15 10:30 documents\ndrwxr-xr-x 2 user user 4096 Jan 15 10:25 downloads\ndrwxr-xr-x 2 user user 4096 Jan 15 10:20 pictures\ndrwxr-xr-x 2 user user 4096 Jan 15 10:15 projects';
    } else if (trimmedCmd === 'ls -la') {
      return 'drwxr-xr-x 3 user user 4096 Jan 15 10:30 .\ndrwxr-xr-x 5 user user 4096 Jan 15 10:00 ..\n-rw-r--r-- 1 user user  220 Jan 15 10:25 .bashrc\ndrwxr-xr-x 2 user user 4096 Jan 15 10:30 documents\ndrwxr-xr-x 2 user user 4096 Jan 15 10:25 downloads';
    } else if (trimmedCmd.startsWith('mkdir ')) {
      const dirName = trimmedCmd.substring(6);
      return `Directory '${dirName}' created successfully`;
    } else if (trimmedCmd.startsWith('touch ')) {
      const fileName = trimmedCmd.substring(6);
      return `File '${fileName}' created successfully`;
    } else if (trimmedCmd.startsWith('cat ')) {
      const fileName = trimmedCmd.substring(4);
      return `Contents of ${fileName}:\nHello, World!\nThis is a sample file.`;
    } else if (trimmedCmd.startsWith('cp ')) {
      return 'File copied successfully';
    } else if (trimmedCmd.startsWith('mv ')) {
      return 'File moved/renamed successfully';
    } else if (trimmedCmd.startsWith('rm ')) {
      return 'File removed successfully';
    } else if (trimmedCmd.startsWith('chmod ')) {
      return 'Permissions changed successfully';
    } else if (trimmedCmd === 'clear') {
      return 'CLEAR_TERMINAL';
    } else if (trimmedCmd === '') {
      return '';
    } else {
      return `Command '${trimmedCmd}' not found or not simulated`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!command.trim()) return;

    const output = simulateCommand(command);
    const isCorrect = command.trim() === exercise.solution.trim();
    
    if (output === 'CLEAR_TERMINAL') {
      setHistory([]);
      setCommand('');
      return;
    }

    setHistory(prev => [...prev, { command, output, isCorrect }]);
    
    if (isCorrect && !isCompleted) {
      setIsCompleted(true);
      onComplete();
    }
    
    setCommand('');
  };

  const handleReset = () => {
    setHistory([]);
    setCommand('');
    setShowHint(false);
    setIsCompleted(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp' && history.length > 0) {
      e.preventDefault();
      const lastCommand = history[history.length - 1]?.command || '';
      setCommand(lastCommand);
    }
  };

  return (
    <div className="space-y-4">
      {/* Task Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">Task:</h3>
        <p className="text-blue-800">{exercise.task}</p>
        
        <div className="flex items-center space-x-4 mt-3">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <Lightbulb className="h-4 w-4" />
            <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Reset</span>
          </button>
        </div>
        
        {showHint && (
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Hint:</strong> {exercise.hint}
            </p>
          </div>
        )}
      </div>

      {/* Terminal */}
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div className="flex items-center space-x-2">
            <Terminal className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-300">Terminal</span>
          </div>
          {isCompleted && (
            <div className="flex items-center space-x-1 text-green-400">
              <Check className="h-4 w-4" />
              <span className="text-sm">Completed!</span>
            </div>
          )}
        </div>
        
        <div className="p-4 min-h-[300px] max-h-[400px] overflow-y-auto font-mono text-sm">
          {/* Command History */}
          {history.map((entry, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">user@devops-lab:~$</span>
                <span className="text-white">{entry.command}</span>
                {entry.isCorrect !== undefined && (
                  entry.isCorrect ? (
                    <Check className="h-4 w-4 text-green-400" />
                  ) : (
                    <X className="h-4 w-4 text-red-400" />
                  )
                )}
              </div>
              {entry.output && (
                <div className="text-gray-300 ml-6 whitespace-pre-line">
                  {entry.output}
                </div>
              )}
            </div>
          ))}
          
          {/* Current Input */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <span className="text-green-400">user@devops-lab:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white outline-none"
              placeholder="Type your command here..."
              autoFocus
            />
          </form>
        </div>
      </div>

      {/* Command Reference */}
      <div className="text-xs text-gray-500 space-y-1">
        <p><strong>Tips:</strong></p>
        <ul className="list-disc list-inside space-y-1">
          <li>Use ↑ arrow key to recall previous commands</li>
          <li>Type 'clear' to clear the terminal</li>
          <li>Commands are case-sensitive</li>
          <li>Press Enter to execute your command</li>
        </ul>
      </div>
    </div>
  );
};

export default TerminalPlayground;