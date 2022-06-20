@echo off
Title Restore
Color 02
if exist "%AppData%\Microsoft\Windows\Start Menu\Programs\Startup\get rickrolled.cmd" (
    del "%AppData%\Microsoft\Windows\Start Menu\Programs\Startup\get rickrolled.cmd"
    echo Deleted!
) else (
    echo File is already deleted
)
pause