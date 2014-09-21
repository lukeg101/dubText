#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((t*t/256)&(t>>((t/1024)%16))^t%64*(0xC0D3DE4D69>>(t>>9&30)&t%32)*t>>18);
	}
}