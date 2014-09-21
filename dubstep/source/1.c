#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(t*(((t>>12)|(t>>8))&(63&(t>>4))));
	}
}