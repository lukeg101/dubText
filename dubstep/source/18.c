#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(((t*(t>>8|t>>9)&46&t>>8))^(t&t>>13|t>>6));
	}
}