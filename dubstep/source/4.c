#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		int v = (t*(((t>>9)|(t>>13))&(25&(t>>6))));
		putchar(v);
	}
}