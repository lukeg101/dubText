#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((t>>7|t|t>>6)*10+4*(t&t>>13|t>>6));
	}
}