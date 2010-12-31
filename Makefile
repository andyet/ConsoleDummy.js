SHELL=/bin/bash


COMPILER = /usr/local/bin/closure-compiler.jar

SRC = ConsoleDummy.js
MIN = ConsoleDummy.min.js

SRC2 = SlimConsoleDummy.js
MIN2 = SlimConsoleDummy.min.js

$(shell rm $(MIN))
$(shell rm $(MIN2))

min: $(MIN) $(MIN2)

$(MIN): $(SRC)
	@@echo
	@@echo "Building" $(MIN) "..."
ifdef COMPILER
	@@java -jar $(COMPILER) --compilation_level ADVANCED_OPTIMIZATIONS --js=$(SRC) > $(MIN)
	@@echo $(MIN) "built."
	@@echo "Character count:"
	@@wc -c $(MIN)
else
	@@echo $(MIN) "not built."
	@@echo "    Google Closure compiler required to build minified version."
	@@echo "    Please set COMPILER variable in 'makefile' to the jar file."
endif
	@@echo

$(MIN2): $(SRC2)
	@@echo
	@@echo "Building" $(MIN2) "..."
ifdef COMPILER
	@@java -jar $(COMPILER) --compilation_level ADVANCED_OPTIMIZATIONS --js=$(SRC2) > $(MIN2)
	@@echo $(MIN2) "built."
	@@echo "Character count:"
	@@wc -c $(MIN2)
else
	@@echo $(MIN2) "not built."
	@@echo "    Google Closure compiler required to build minified version."
	@@echo "    Please set COMPILER variable in 'makefile' to the jar file."
endif
	@@echo
