
const QUESTIONS = [{"prompt": "What type of directory structure does Linux use?", "choices": ["Flat", "Hierarchical", "Circular", "Binary"], "answer": 1, "why": "Linux organizes directories in a tree-like hierarchy starting from root.", "fix": "Remember: everything branches downward from /. That is a hierarchy.", "cmd": "No command needed. This is conceptual."}, {"prompt": "What is the first directory in the Linux file system and its symbol?", "choices": ["home (~)", "bin (*)", "root (/)", "usr (^)"], "answer": 2, "why": "The root directory is the top of the Linux filesystem.", "fix": "The symbol / always means the root directory.", "cmd": "Use: ls /"}, {"prompt": "What command takes you back to your home directory from anywhere?", "choices": ["cd /", "cd ..", "cd", "cd ~"], "answer": 2, "why": "Typing cd with no arguments returns you to your home directory.", "fix": "Remember: cd alone = go home.", "cmd": "cd"}, {"prompt": "What symbol refers to the user\u2019s home directory?", "choices": ["/", "~", "..", "*"], "answer": 1, "why": "The tilde symbol represents the user\u2019s home directory.", "fix": "~ always expands to /home/username.", "cmd": "echo ~"}, {"prompt": "Which command shows which shell is currently running?", "choices": ["shell", "echo $SHELL", "ps shell", "which bash"], "answer": 1, "why": "$SHELL stores the current shell program.", "fix": "Environment variables are viewed using echo $VARIABLE.", "cmd": "echo $SHELL"}, {"prompt": "Why is rm -rf considered dangerous?", "choices": ["It only deletes empty files", "It deletes files silently and recursively", "It moves files to trash", "It only works as root"], "answer": 1, "why": "-r deletes recursively and -f forces deletion without confirmation.", "fix": "Never use rm -rf unless you are 100% sure of the path.", "cmd": "rm -rf directory_name  # DANGEROUS"}, {"prompt": "What does the pipe ( | ) do?", "choices": ["Redirects output to a file", "Combines files", "Sends output of one command as input to another", "Runs commands in background"], "answer": 2, "why": "Pipes connect stdout of one command to stdin of another.", "fix": "Think: output \u2192 input.", "cmd": "ls -al | less"}, {"prompt": "Which command displays file permissions?", "choices": ["ls", "ls -l", "chmod", "umask"], "answer": 1, "why": "The -l option shows a long listing including permissions.", "fix": "Permissions always appear at the start of ls -l output.", "cmd": "ls -l filename"}];
let i = 0;
let picked = null;

function startStudy(){
 document.getElementById('welcome').classList.add('hidden');
 document.getElementById('study').classList.remove('hidden');
 render();
}

function render(){
 picked = null;
 document.getElementById('feedback').innerHTML='';
 document.getElementById('question').innerText = QUESTIONS[i].prompt;
 const c = document.getElementById('choices');
 c.innerHTML='';
 QUESTIONS[i].choices.forEach((ch,idx)=>{
   const b=document.createElement('button');
   b.innerText=ch;
   b.onclick=()=>picked=idx;
   c.appendChild(b);
 });
}

function check(){
 if(picked===null) return;
 const q=QUESTIONS[i];
 const ok = picked===q.answer;
 document.getElementById('feedback').innerHTML =
 ok
 ? `<b>Correct!</b><br>${q.why}`
 : `<b>Incorrect.</b><br><b>Why:</b> ${q.why}<br><b>What to do:</b> ${q.fix}<br><b>Command:</b><pre>${q.cmd}</pre>`;
}

function next(){
 i=(i+1)%QUESTIONS.length;
 render();
}
