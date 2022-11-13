commands = {
    help: {
        help: "Show this text",
        run: (_) => {
            for (const cmd in commands) {
                if (cmd == "rmos") continue;
                addElement(
                    `<span class="command">${cmd}</span>
                    &ensp;&ensp;&ensp;&ensp;${commands[cmd]["help"]}`
                );
            }
        },
    },
    rmos: {
        run: () => {
            addElement('<label class="text-danger">Removing OS...</label>');
            setTimeout(() => {
                getElement("#os").classList = "hidden";
                getElement("#kernel").classList =
                    "w-full h-full bg-black text-white";
                getElement(
                    "#kernel"
                ).innerHTML = `<div>[ 1561.519943] [Hardware Error]: CPU 4: Machine Check Exception:5 Bank 3: be00000000800400</div>
<div>[ 1561.519946] [Hardware Error]: RIP !INEXACT!33&lt;<00007fe99ae93e54></div>
<div>[ 1561.519948] [Hardware Error]: TSC 539b174dead ADDR 3fe98d264ebd MISC 1</div>
<div>[ 1561.519950] [Hardware Error]: PROCESSOR 0:206a7 TIME 1357862746 SOCKET 0 APIC 1 microcode 28</div>
<div>[ 1561.519951] [Hardware Error]: Run the above through 'mcelog --ascii'</div>
<div>[ 1561.519953] [Hardware Error]: CPU 0: Machine Check Exception: 4 Bank 3: be00000000800400</div>
<div>[ 1561.519955] [Hardware Error]: TSC 539b174de9d ADDR 3fe98d264ebd MISC 1 </div>
<div>[ 1561.519957] [Hardware Error]: PROCESSOR 0:206a7 TIME 1357862746 SOCKET 0 APIC 0 microcode 28 </div>
<div>[ 1561.519958] [Hardware Error]: Run the above through 'mcelog --ascii' </div>
<div>[ 1561.519959] [Hardware Error]: Machine check: Processor context corrupt</div>
<div>[ 1561.519960] Kernel panic - not syncing: Fatal Machine check</div>
<div>[ 1561.519962] Pid: 0, comm: swapper/5 Tainted: P M C O 3.2.0-35-generic #55-Ubuntu</div>
<div>[ 1561.519963] Call Trace:</div>
<div>[ 1561.519964] &lt;#MC> [&lt;ffffffff81644340>] panic+0x91/0x1a4</div>
<div>[ 1561.519971] [&lt;ffffffff8102abeb>] mce_panic.part.14+0x18b/0x1c0</div>
<div>[ 1561.519973] [&lt;ffffffff8102ac80>] mce_panic+0x60/0xb0</div>
<div>[ 1561.519975] [&lt;ffffffff8102aec4>] mce_reign+0x1f4/0x200</div>
<div>[ 1561.519977] [&lt;ffffffff8102b175>] mce_end+0xf5/0x100</div>
<div>[ 1561.519979] [&lt;ffffffff8102b92c>] do_machine_check+0x3fc/0x600</div>
<div>[ 1561.519982] [&lt;ffffffff8136d48f>] ? intel_idle+0xbf/0x150</div>
<div>[ 1561.519984] [&lt;ffffffff8165d78c>] machine_check+0x1c/0x30</div>
<div>[ 1561.519986] [&lt;ffffffff8136d48f>] ? intel_idle+0xbf/0x150</div>
<div>[ 1561.519987] &lt;&lt;EOE>> [&lt;ffffffff81509697>] ? menu_select+0xe7/0x2c0</div>
<div>[ 1561.519991] [&lt;ffffffff815082d1>] cpuidle_idle_call+0xc1/0x280</div>
<div>[ 1561.519994] [&lt;ffffffff8101322a>] cpu_idle+0xca/0x120</div>
<div>[ 1561.519996] [&lt;ffffffff8163aa9a>] start_secondary+0xd9/0xdb</div>
<div>PID: 0     TASK: ffff880211251700  CPU: 5   COMMAND: "swapper/5"</div>
<div> #0 [ffff88021ed4aba0] machine_kexec at ffffffff8103947a</div>
<div> #1 [ffff88021ed4ac10] crash_kexec at ffffffff810b52c8</div>
<div> #2 [ffff88021ed4ace0] panic at ffffffff81644347</div>
<div> #3 [ffff88021ed4ad60] mce_panic.part.14 at ffffffff8102abeb</div>
<div> #4 [ffff88021ed4adb0] mce_panic at ffffffff8102ac80</div>
<div> #5 [ffff88021ed4ade0] mce_reign at ffffffff8102aec4</div>
<div> #6 [ffff88021ed4ae40] mce_end at ffffffff8102b175</div>
<div> #7 [ffff88021ed4ae70] do_machine_check at ffffffff8102b92c</div>
<div> #8 [ffff88021ed4af50] machine_check at ffffffff8165d78c</div>
<div>  [exception RIP: intel_idle+191]</div>
<div>  RIP: ffffffff8136d48f  RSP: ffff880211261e38  RFLAGS: 00000046
<div>  RAX: 0000000000000020  RBX: 0000000000000008  RCX: 0000000000000001</div>
<div>  RDX: 0000000000000000  RSI: ffff880211261fd8  RDI: ffffffff81c12f00</div>
<div>  RBP: ffff880211261e98 R8: 00000000fffffffc   R9: 0000000000000f9f</div>
<div>  R10: 0000000000001e95  R11: 0000000000000000  R12: 0000000000000003</div>
<div>  R13: ffff88021ed5ac70  R14: 0000000000000020  R15: 12d818fb42cfe42b</div>
<div>  ORIG_RAX: ffffffffffffffff  CS: 0010  SS: 0018</div>
<div>--- <MCE exception stack> ---</div>
<div> #9 [ffff880211261e38] intel_idle at ffffffff8136d48f</div>
<div>#10 [ffff880211261ea0] cpuidle_idle_call at ffffffff815082d1</div>
<div>#11 [ffff880211261f00] cpu_idle at ffffffff8101322a</div>`;
                setTimeout(() => {
                    window.open(
                        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                        "_blank"
                    );
                }, 500);
            }, 1000);
        },
    },
    about: {
        help: "Who is Rama?",
        style: "text-[#769cb9]",
        text: `<div>Hi, I'm <span class="command">Rama!</span>
            <div>I'm a High School student that loves in software develompent</div>
            <div>whenever i have free time, I makes engaging websites like this one</div>
            <div>if you want to know my skills, type <span class="command">'skills'</span></div>
            </div>`,
    },
    projects: {
        help: "Display my projects",
        text: `Most of my project is offline`,
    },
    skills: {
        help: "Show My Skills",
        text: `<div class="space-x-5"><span>Language</span><span>Experience</span></div>
                <div class="space-x-[0.15rem]"><span>==========</span><span>==========</span></div>
                <div><span class="lang">JavaScript</span> <span>1.5 Years</span></div>
                <div><span class="lang">TypeScript</span> <span>1.5 Years</span></div>
                <div class="space-x-[2.30rem]"><span class="lang">Python</span> <span>3 Years</span></div>
                <div class="space-x-[4.65rem]"><span class="lang">C#</span> <span>1 Years</span></div>`,
    },
    clear: {
        help: "Clear Terminal",
        run: (_) => (getElement("#output").innerHTML = ""),
    },
    banner: {
        help: "Display the header",
        run: showBanner,
    },
    /////////////////////////////////////////////////////////////////////
    cd: {
        help: "Change Directory",
        run: (args) => {
            if (args[1] == undefined)
                return addElement(
                    '<div><span class="command">cd</span> [DIRECTORY]</div>'
                );
            if (args[1] == "/root" || args[1] == "~")
                return changeDirectory(args[1]);
            addElement("Directory not found", "text-[#ad4a4a]");
        },
    },
    ls: {
        help: "List Directory",
        run: (args) => {
            let dir = directory.textContent;
            if (dir == "/root") addElement("password.txt");
        },
    },
    cat: {
        help: "Concatenate File",
        run: (args) => {
            let dir = directory.textContent;
            if (dir == "/root" && args[1] == "password.txt")
                return addElement(password);
            addElement("File not found", "text-[#ad4a4a]");
        },
    },
    secret: {
        help: "Shhhhhhhhhh!!!!",
        run: (_) => {
            secret = true;
            getElement("#cmd").classList = "hidden";
            setFocus();
        },
    },
};
