#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(((t&4096)?((t*(t^t%255)|(t>>4))>>1):(t>>3)|((t&8192)?t<<2:t)));
	}
}