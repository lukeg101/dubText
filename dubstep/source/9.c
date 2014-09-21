#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(((t>>1%128)+20)*3*t>>14*t>>18);
	}
}