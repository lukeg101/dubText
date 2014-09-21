#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(t*(((t>>9)&10)|((t>>11)&24)^((t>>10)&15&(t>>15))));
	}
}

