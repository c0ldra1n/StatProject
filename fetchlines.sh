
echo -n $1 >> lines
echo -n " " >> lines
./cloc-git $1 | grep SUM: | awk '{print $5}' >> lines
