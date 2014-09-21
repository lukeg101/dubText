#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(t*5&(t>>7)|t*3&(t*4>>10));
	}
}