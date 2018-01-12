---
title: "A Little (Funny) Disaster: Damaged MFT and MFT Mirror + How I Solved It"
date:  "2016-12-11T12:00:00.000Z"
---

Until last Thursday, I used Linux Mint for my daily needs without visiting my Windows 10. The reason was quiet obvious, my Windows 10 and almost all of software installed there was pirated softwares. I tried to escape from this evil circle :D

But finally at last Thursday, I revisited my Windows 10. I had to write a paper for my college task, and my lecturer gave us a *doc* template file. As everyone knows, there is no Linux software that can open *doc* file perfectly. So I was "forced" to open my Windows and Word again :(

Before writing my paper, I remembered about Bash for Windows, something exciting that I had not tried. So I upgraded my Windows 10 using Windows 10 Upgrade Assistant. After writing for about half of my paper, I started to be bored. I decided to take a rest for a minute.

By the way, it was Thursday night, and the deadline for this task was at Friday 5 pm. Such a deadliner XD

But suddenly, the Windows upgrader restarted my laptop. It began to do the upgrade. I knew that it will take a quite long time (because it did a big upgrade), so I decided to sleep overnight. I had no bad feeling at that time.

When I opened my eyes, the upgrade was successful. I enabled the Windows Subsystem for Linux, installed some Linux compilers and softwares, and tested them. After I had done playing with the WSL, I planed to continue my writing. Before executing that noble plan, a small notification appeared suggesting me to do a drive repair. Not a bad thing, I thought. So I followed the suggestion and after It was finished, I restarted my laptop as also suggested by the system.

In fact, that was the beginning of a little disaster. After finished restarting, I could not open the D drive, where I store all of my data. Then I tried to open my Linux Mint, but I could not even boot successfully. The system told me that it was an "emergency" situation and redirected me to the root shell. I realized that I set all partitions to be mounted at startup. I thought that the error was raised because the system could not mount my data drive, so I edited my */etc/fstab* and restarted my laptop. Now I could boot to my Linux Mint.

In Linux Mint, I still could not open that drive. But the error message was more helpful. The error message told me that I could not open the drive because it could not find the MFT. I had not known what MFT was, but as you can guess, I asked google for help. Some forum posts suggested to repair the MFT using *testdisk*. I followed the suggestion, but it said that it could not repair my drive because both the MFT and MFT mirror was damaged.

I searched for solution again and then I found that I faced a worst nightmare. There was no solution if both the MFT and MFT mirror was damaged, and the only one solution for getting back my files was using a recovery software. It would take a long time indeed.

I was desperate. I did not know what to do. Should I rewrite my paper from scratch? Oh no.

I accepted the fact that rewriting my paper from scratch was the only solution. I rebooted my laptop to Windows and searched for a free recovery tool that could recover files from a NTFS partition that has damaged MFT and MFT mirror. I planed to recover my files while I was doing my college task. But then I realized that I had not tried to use *chkdisk*. Although all forum posts said that it could not be fixed by any tools, I thought that I better tried it. Nothing to lose anyway. So I ran *chkdisk* and magically it fixed my drive!!!

I was extremely happy. It felt like I was kicked to a high cliff but suddenly a unicorn saved my life. I continued my task and finished it on time.

Alhamdulillah.
