cd ..
7z a -tzip zipbuilds/build.zip * -xr!scripts\* -xr!out\* -xr!node_modules\* -xr!dist\* -xr!zipbuilds\*
exit